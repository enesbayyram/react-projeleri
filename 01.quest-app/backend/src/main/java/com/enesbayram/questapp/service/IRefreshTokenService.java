package com.enesbayram.questapp.service;

import com.enesbayram.questapp.entities.RefreshToken;
import com.enesbayram.questapp.entities.User;

public interface IRefreshTokenService {
	


	RefreshToken findByRefreshToken(String refreshToken);
	
	Boolean verifyRefreshToken(RefreshToken refreshToken);

	RefreshToken createRefreshToken(User user);
}
