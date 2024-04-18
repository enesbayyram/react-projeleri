package com.enesbayram.hr.service.impl;

import java.time.Instant;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.enesbayram.hr.dto.DtoUserDef;
import com.enesbayram.hr.dto.DtoUserDefIU;
import com.enesbayram.hr.entity.RefreshToken;
import com.enesbayram.hr.entity.UserDef;
import com.enesbayram.hr.exception.HRBaseException;
import com.enesbayram.hr.exception.HRMessageFactory;
import com.enesbayram.hr.exception.HRMessageType;
import com.enesbayram.hr.exception.HrMessage;
import com.enesbayram.hr.jwt.JwtService;
import com.enesbayram.hr.model.api.AuthRequest;
import com.enesbayram.hr.model.api.AuthResponse;
import com.enesbayram.hr.model.api.RefreshTokenRequest;
import com.enesbayram.hr.repository.UserDefRepository;
import com.enesbayram.hr.service.IAuthService;
import com.enesbayram.hr.service.IRefreshTokenService;
import com.enesbayram.hr.service.IUserDefService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl extends BaseDbServiceImpl<UserDefRepository, UserDef> implements IAuthService {

	private final AuthenticationManager authenticationManager;

	private final UserDefRepository userDefRepository;

	private final JwtService jwtService;

	private final IRefreshTokenService refreshTokenService;

	private final IUserDefService userDefService;

	@Value("${refresh-token.expiredIn}")
	private long refreshTokenExpiredIn;

	@Override
	public Class<?> getDTOClassForService() {
		return DtoUserDef.class;
	}

	private RefreshToken createRefreshTokenModel(UserDef userDef) {
		RefreshToken refreshToken = new RefreshToken();
		refreshToken.setRefreshToken(UUID.randomUUID().toString());
		refreshToken.setExpireDate(Date.from(Instant.now().plusMillis(refreshTokenExpiredIn)));
		refreshToken.setUserDef(userDef);

		return refreshToken;
	}

	@Override
	public DtoUserDef register(DtoUserDefIU dtoUserDefIU) {
		Optional<UserDef> optional = dao.findByUsername(dtoUserDefIU.getUsername());
		if (optional.isPresent()) {
			throw new HRBaseException(new HrMessage(HRMessageType.ALREADY_IS_EXIST_1003,
					HRMessageFactory.ofStatic(dtoUserDefIU.getUsername())));
		}
		UserDef userDef = toDTOForInsert(dtoUserDefIU, UserDef.class);
		userDef.setPassword(new BCryptPasswordEncoder().encode(dtoUserDefIU.getPassword()));
		userDef.setIsActive(true);
		UserDef savedUserDef = save(userDef);
		return toDTO(savedUserDef);
	}

	@Transactional(propagation = Propagation.NEVER)
	@Override
	public AuthResponse authenticate(AuthRequest authRequest) {
		AuthResponse response = new AuthResponse();
		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
		} catch (Exception e) {
			log.error("--- Token alinirken hata olustu ---> " + e.getMessage());
			throw new HRBaseException(new HrMessage(HRMessageType.USERNAME_OR_PASSWORD_INCORRECT_1004, null));
		}
		Optional<UserDef> userDefOpt = userDefRepository.findByUsername(authRequest.getUsername());
		String token = jwtService.generateToken(userDefOpt.get());

		response.setToken(token);

		RefreshToken refreshToken = refreshTokenService.findRefreshTokenByUserDef(userDefOpt.get());
		if (refreshToken == null) {
			RefreshToken newRefreshToken = refreshTokenService
					.createRefreshToken(createRefreshTokenModel(userDefOpt.get()));
			response.setRefreshToken(newRefreshToken.getRefreshToken());
		} else {
			boolean isRefreshTokenValid = refreshTokenService.isRefreshTokenValid(refreshToken);
			if (isRefreshTokenValid) {
				response.setRefreshToken(refreshToken.getRefreshToken());
			} else {
				refreshTokenService.deleteRefreshToken(refreshToken);
				RefreshToken newRefreshToken = refreshTokenService
						.createRefreshToken(createRefreshTokenModel(userDefOpt.get()));
				response.setRefreshToken(newRefreshToken.getRefreshToken());
			}
		}
		return response;
	}

	@Transactional(propagation = Propagation.NEVER)
	@Override
	public AuthResponse refreshToken(RefreshTokenRequest refreshTokenRequest) {
		RefreshToken refreshToken = refreshTokenService.findByRefreshToken(refreshTokenRequest.getRefreshToken());
		if (refreshToken == null) {
			throw new HRBaseException(new HrMessage(HRMessageType.REFRESH_TOKEN_INVALID_1006,
					HRMessageFactory.ofStatic(refreshTokenRequest.getRefreshToken())));
		}
		boolean refreshTokenIsValid = refreshTokenService.isRefreshTokenValid(refreshToken);
		if (!refreshTokenIsValid) {
			refreshTokenService.deleteRefreshToken(refreshToken);
			throw new HRBaseException(new HrMessage(HRMessageType.REFRESH_TOKEN_EXPIRED_1007,
					HRMessageFactory.ofStatic(refreshTokenRequest.getRefreshToken())));
		}
		String token = jwtService.generateToken(refreshToken.getUserDef());
		return AuthResponse.builder().token(token).refreshToken(refreshToken.getRefreshToken()).build();

	}

	@Override
	public DtoUserDef getCurrenctUser(String username) {
		if (StringUtils.isEmpty(username)) {
			throw new HRBaseException(
					new HrMessage(HRMessageType.FIELD_IS_REGUIRED_1001, HRMessageFactory.ofStatic(username)));
		}
		UserDef userDef = userDefService.findByUsername(username);
		if (userDef != null) {
			return toDTO(userDef);
		}
		return null;
	}

}
