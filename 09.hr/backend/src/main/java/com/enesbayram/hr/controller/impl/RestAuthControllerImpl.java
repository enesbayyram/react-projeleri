package com.enesbayram.hr.controller.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.enesbayram.hr.controller.IRestAuthController;
import com.enesbayram.hr.dto.DtoUserDef;
import com.enesbayram.hr.dto.DtoUserDefIU;
import com.enesbayram.hr.model.api.AuthRequest;
import com.enesbayram.hr.model.api.AuthResponse;
import com.enesbayram.hr.model.api.HrRootEntity;
import com.enesbayram.hr.model.api.RefreshTokenRequest;
import com.enesbayram.hr.service.IAuthService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
public class RestAuthControllerImpl extends RestBaseController implements IRestAuthController {

	@Autowired
	private IAuthService authService;

	@Operation(summary = "${hr.api.permit-all.register.description}")
	@PostMapping("/register")
	@Override
	public HrRootEntity<DtoUserDef> register(@RequestBody DtoUserDefIU dtoUserDefIU) {
		return ok(authService.register(dtoUserDefIU));
	}

	@Operation(summary = "${hr.api.permit-all.authenticate.description}")
	@PostMapping("/authenticate")
	@Override
	public HrRootEntity<AuthResponse> authenticate(@RequestBody AuthRequest authRequest) {
		return ok(authService.authenticate(authRequest));
	}
	

	@Operation(summary = "${hr.api.permit-all.refresh-token.description}")
	@PostMapping("/refreshToken")
	@Override
	public HrRootEntity<AuthResponse> refreshToken(@RequestBody RefreshTokenRequest refreshTokenRequest) {
		return ok(authService.refreshToken(refreshTokenRequest));
	}

	@Operation(summary = "${hr.api.permit-all.get-current-user.description}")
	@PostMapping("/getCurrentUser/{username}")
	@Override
	public HrRootEntity<DtoUserDef> getCurrentUser(@PathVariable("username") String username) {
		return ok(authService.getCurrenctUser(username));
	}

}
