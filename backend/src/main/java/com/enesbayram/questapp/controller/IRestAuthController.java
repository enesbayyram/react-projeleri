package com.enesbayram.questapp.controller;

import com.enesbayram.questapp.api.model.LoginRequest;
import com.enesbayram.questapp.api.model.LoginResponse;
import com.enesbayram.questapp.api.model.RefreshTokenRequest;
import com.enesbayram.questapp.api.model.RegisterRequest;
import com.enesbayram.questapp.entities.RestRootEntity;

public interface IRestAuthController {

	RestRootEntity<String> register(RegisterRequest request) throws Exception;
	
	RestRootEntity<LoginResponse> login(LoginRequest request) throws Exception;
	
	RestRootEntity<?> refreshToken(RefreshTokenRequest request) throws Exception;
}
