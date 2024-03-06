package com.enesbayram.hr.controller;

import com.enesbayram.hr.model.DtoUserDef;
import com.enesbayram.hr.model.DtoUserDefIU;
import com.enesbayram.hr.model.api.AuthRequest;
import com.enesbayram.hr.model.api.AuthResponse;
import com.enesbayram.hr.model.api.HrRootEntity;

public interface IRestAuthController {

	HrRootEntity<DtoUserDef> register(DtoUserDefIU dtoUserDefIU);
	
	HrRootEntity<AuthResponse> authenticate(AuthRequest authRequest);
}
