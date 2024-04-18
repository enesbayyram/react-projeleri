package com.enesbayram.hr.controller;

import com.enesbayram.hr.dto.DtoUserDef;
import com.enesbayram.hr.dto.DtoUserDefIU;
import com.enesbayram.hr.model.api.AuthRequest;
import com.enesbayram.hr.model.api.AuthResponse;
import com.enesbayram.hr.model.api.HrRootEntity;
import com.enesbayram.hr.model.api.RefreshTokenRequest;

public interface IRestAuthController {

	HrRootEntity<DtoUserDef> register(DtoUserDefIU dtoUserDefIU);
	
	HrRootEntity<AuthResponse> authenticate(AuthRequest authRequest);
	
	HrRootEntity<AuthResponse> refreshToken(RefreshTokenRequest refreshTokenRequest);
	
	HrRootEntity<DtoUserDef> getCurrentUser(String username);
}
