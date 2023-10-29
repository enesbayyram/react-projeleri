package com.enesbayram.questapp.service;

import com.enesbayram.questapp.api.model.LoginRequest;
import com.enesbayram.questapp.api.model.LoginResponse;
import com.enesbayram.questapp.api.model.RefreshTokenRequest;
import com.enesbayram.questapp.api.model.RegisterRequest;
import com.enesbayram.questapp.entities.RestRootEntity;

public interface IAuthService {

	String register(RegisterRequest request) throws Exception;
	
	LoginResponse login(LoginRequest request);
	
	LoginResponse refreshToken (RefreshTokenRequest request) throws Exception;
}
