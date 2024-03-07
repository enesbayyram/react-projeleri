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

@RestController
public class RestAuthControllerImpl extends RestBaseController implements IRestAuthController {

	@Autowired
	private IAuthService authService;

	@PostMapping("/register")
	@Override
	public HrRootEntity<DtoUserDef> register(@RequestBody DtoUserDefIU dtoUserDefIU) {
		return ok(authService.register(dtoUserDefIU));
	}

	@PostMapping("/authenticate")
	@Override
	public HrRootEntity<AuthResponse> authenticate(@RequestBody AuthRequest authRequest) {
		return ok(authService.authenticate(authRequest));
	}

}
