package com.enesbayram.questapp.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.enesbayram.questapp.api.model.LoginRequest;
import com.enesbayram.questapp.api.model.LoginResponse;
import com.enesbayram.questapp.api.model.RefreshTokenRequest;
import com.enesbayram.questapp.api.model.RegisterRequest;
import com.enesbayram.questapp.entities.RefreshToken;
import com.enesbayram.questapp.entities.User;
import com.enesbayram.questapp.jwt.JwtService;
import com.enesbayram.questapp.repository.UserRepository;
import com.enesbayram.questapp.service.IAuthService;
import com.enesbayram.questapp.service.IRefreshTokenService;

@Service
public class AuthServiceImpl implements IAuthService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private IRefreshTokenService refreshTokenService;

	@Autowired
	private JwtService jwtService;

	@Override
	public String register(RegisterRequest request) throws Exception {
		Optional<User> optional = userRepository.findByUsername(request.getUsername());
		if (optional.isPresent()) {
			throw new Exception("User is already exist");
		}
		User newUser = new User();
		newUser.setCreateDate(new java.util.Date());
		newUser.setUsername(request.getUsername());
		newUser.setPassword(new BCryptPasswordEncoder().encode(request.getPassword()));

		userRepository.save(newUser);

		return "Kullanıcı kaydedildi";
	}
	
	public LoginResponse refreshToken (RefreshTokenRequest request) throws Exception {
			RefreshToken refreshToken = refreshTokenService.findByRefreshToken(request.getRefreshToken());
			if(refreshToken==null) {
				throw new Exception("Refresh token not found in db");
			}
			Boolean verifyResult = refreshTokenService.verifyRefreshToken(refreshToken);
			if(!verifyResult.booleanValue()) {
				throw new Exception("Refresh token is expired :(");
			}
			
			String token = jwtService.generateToken(refreshToken.getUser());
			
		LoginResponse response=	LoginResponse.builder()
			.token(token)
			.refreshToken(refreshToken.getRefreshToken())
			.userId(refreshToken.getUser().getId())
			.username(refreshToken.getUser().getUsername())
			.build();
			
			return response;
	}

	@Override
	public LoginResponse login(LoginRequest request) {
		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
		} catch (Exception e) {
			throw e;
		}
		User user = userRepository.findByUsername(request.getUsername()).get();
		String token = jwtService.generateToken(user);
		RefreshToken refreshToken = refreshTokenService.createRefreshToken(user);
		return LoginResponse.builder()
				.token(token)
				.refreshToken(refreshToken.getRefreshToken())
				.userId(user.getId()).
				username(user.getUsername()).build();
	}

}
