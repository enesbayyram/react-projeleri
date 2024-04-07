package com.enesbayram.hr.service;

import com.enesbayram.hr.dto.DtoUserDef;
import com.enesbayram.hr.dto.DtoUserDefIU;
import com.enesbayram.hr.model.api.AuthRequest;
import com.enesbayram.hr.model.api.AuthResponse;
import com.enesbayram.hr.model.api.RefreshTokenRequest;

public interface IAuthService {
	
	DtoUserDef register(DtoUserDefIU dtoUserDefIU);
	
	AuthResponse authenticate(AuthRequest authRequest);
	
	
	AuthResponse refreshToken(RefreshTokenRequest refreshTokenRequest);

}
