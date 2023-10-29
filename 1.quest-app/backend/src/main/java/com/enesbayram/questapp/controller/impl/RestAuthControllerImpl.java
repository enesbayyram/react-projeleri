package com.enesbayram.questapp.controller.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enesbayram.questapp.api.model.LoginRequest;
import com.enesbayram.questapp.api.model.LoginResponse;
import com.enesbayram.questapp.api.model.RefreshTokenRequest;
import com.enesbayram.questapp.api.model.RegisterRequest;
import com.enesbayram.questapp.controller.IRestAuthController;
import com.enesbayram.questapp.entities.RefreshToken;
import com.enesbayram.questapp.entities.RestRootEntity;
import com.enesbayram.questapp.service.IAuthService;

@RestController
@RequestMapping("/auth")
public class RestAuthControllerImpl extends RestBaseController implements IRestAuthController {

	@Autowired
	private IAuthService authService;

	@PostMapping("/login")
	@Override
	public RestRootEntity<LoginResponse> login(@RequestBody LoginRequest request) {
		try {
			return ok(authService.login(request));
		} catch (Exception e) {
			return error(e.getMessage());
		}
	}

	@PostMapping("/register")
	@Override
	public RestRootEntity<String> register(@RequestBody RegisterRequest request) {
		try {
			return ok(authService.register(request));
		} catch (Exception e) {
			return error(e.getMessage());
		}
	}

	@PostMapping("/refresh")
	@Override
	public RestRootEntity<?> refreshToken(@RequestBody RefreshTokenRequest request) throws Exception {
		try {
			return ok(authService.refreshToken(request));
		} catch (Exception e) {
			return error(e.getMessage());
		}
	}

}
