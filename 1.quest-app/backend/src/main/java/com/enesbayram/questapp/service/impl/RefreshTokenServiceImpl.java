package com.enesbayram.questapp.service.impl;

import java.time.Instant;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enesbayram.questapp.entities.RefreshToken;
import com.enesbayram.questapp.entities.User;
import com.enesbayram.questapp.repository.RefreshTokenRepository;
import com.enesbayram.questapp.service.IRefreshTokenService;

@Service
public class RefreshTokenServiceImpl implements IRefreshTokenService {

	@Autowired
	private RefreshTokenRepository refreshTokenRepository;
	
	@Override
	public RefreshToken createRefreshToken(User user) {
		RefreshToken savedRefreshToken =  RefreshToken.builder()
		.refreshToken(UUID.randomUUID().toString())
		.expiredDate(Date.from(Instant.now().plusMillis(60*1000*120)))
		.user(user)
		.build();
		return refreshTokenRepository.save(savedRefreshToken);
	}

	@Override
	public RefreshToken findByRefreshToken(String refreshToken) {
		Optional<RefreshToken> optional = refreshTokenRepository.findByRefreshToken(refreshToken);
		if (optional.isPresent()) {
			return optional.get();
		}
		return null;
	}

	@Override
	public Boolean verifyRefreshToken(RefreshToken refreshToken) {
		if(refreshToken.getExpiredDate().before(new Date())) {
			refreshTokenRepository.delete(refreshToken);
			return false;
		}
		return true;
	}

	

}
