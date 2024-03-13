package com.enesbayram.hr.controller.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.enesbayram.hr.controller.IRestAuthController;
import com.enesbayram.hr.model.DtoUserDef;
import com.enesbayram.hr.model.DtoUserDefIU;
import com.enesbayram.hr.model.api.AuthRequest;
import com.enesbayram.hr.model.api.AuthResponse;
import com.enesbayram.hr.model.api.HrRootEntity;
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

}
