package com.enesbayram.hr.service;

import com.enesbayram.hr.model.DtoUserDef;
import com.enesbayram.hr.model.DtoUserDefIU;
import com.enesbayram.hr.model.api.AuthRequest;
import com.enesbayram.hr.model.api.AuthResponse;

public interface IAuthService {
	
	DtoUserDef register(DtoUserDefIU dtoUserDefIU);
	
	AuthResponse authenticate(AuthRequest authRequest);

}
