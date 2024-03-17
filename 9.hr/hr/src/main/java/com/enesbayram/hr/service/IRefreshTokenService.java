package com.enesbayram.hr.service;

import com.enesbayram.hr.entity.RefreshToken;

public interface IRefreshTokenService {
	
	RefreshToken findByRefreshToken(String refreshToken);
	
	boolean isRefreshTokenValid(RefreshToken refreshToken);
	
	RefreshToken createRefreshToken(RefreshToken refreshToken);
	
	void deleteRefreshToken(RefreshToken refreshToken);
}
