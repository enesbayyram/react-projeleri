package com.enesbayram.hr.service.impl;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.enesbayram.hr.entity.UserDef;
import com.enesbayram.hr.exception.HRBaseException;
import com.enesbayram.hr.exception.HRMessageFactory;
import com.enesbayram.hr.exception.HRMessageType;
import com.enesbayram.hr.exception.HrMessage;
import com.enesbayram.hr.jwt.JwtService;
import com.enesbayram.hr.model.DtoUserDef;
import com.enesbayram.hr.model.DtoUserDefIU;
import com.enesbayram.hr.model.api.AuthRequest;
import com.enesbayram.hr.model.api.AuthResponse;
import com.enesbayram.hr.repository.UserDefRepository;
import com.enesbayram.hr.service.IAuthService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl extends BaseDbServiceImpl<UserDefRepository, UserDef> implements IAuthService {

	private final AuthenticationManager authenticationManager;

	private final UserDefRepository userDefRepository;

	private final JwtService jwtService;

	@Override
	public Class<?> getDTOClassForService() {
		return DtoUserDef.class;
	}

	@Override
	public DtoUserDef register(DtoUserDefIU dtoUserDefIU) {
		Optional<UserDef> optional = dao.findByUsername(dtoUserDefIU.getUsername());
		if (optional.isPresent()) {
			throw new HRBaseException(new HrMessage(HRMessageType.ALREADY_IS_EXIST_1003,HRMessageFactory.ofStatic(dtoUserDefIU.getUsername())));
		}
		UserDef userDef = toDTOForInsert(dtoUserDefIU, UserDef.class);
		userDef.setPassword(new BCryptPasswordEncoder().encode(dtoUserDefIU.getPassword()));
		userDef.setIsActive(true);
		UserDef savedUserDef = save(userDef);
		return toDTO(savedUserDef);
	}

	@Override
	public AuthResponse authenticate(AuthRequest authRequest) {
		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
		} catch (Exception e) {
			log.error("--- Token alinirken hata olustu ---> " + e.getMessage());
			throw new HRBaseException(new HrMessage(HRMessageType.USERNAME_OR_PASSWORD_INCORRECT_1004, null));
		}
		Optional<UserDef> userDefOpt = userDefRepository.findByUsername(authRequest.getUsername());
		String token = jwtService.generateToken(userDefOpt.get());

		return AuthResponse.builder().token(token).build();
	}

}
