package com.enesbayram.hr.service;

import com.enesbayram.hr.entity.RefreshToken;
import com.enesbayram.hr.entity.UserDef;

public interface IRefreshTokenService {
	
	RefreshToken findByRefreshToken(String refreshToken);
	
	RefreshToken findRefreshTokenByUserDef(UserDef userDef);
	
	boolean isRefreshTokenValid(RefreshToken refreshToken);
	
	RefreshToken createRefreshToken(RefreshToken refreshToken);
	
	void deleteRefreshToken(RefreshToken refreshToken);
}
