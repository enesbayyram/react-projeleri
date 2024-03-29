package com.enesbayram.hr.service.impl;

import java.util.Date;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.enesbayram.hr.entity.RefreshToken;
import com.enesbayram.hr.repository.RefreshTokenRepository;
import com.enesbayram.hr.service.IRefreshTokenService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class RefreshTokenServiceImpl extends BaseDbServiceImpl<RefreshTokenRepository, RefreshToken>
		implements IRefreshTokenService {

	@Override
	public Class<?> getDTOClassForService() {
		return null;
	}

	@Override
	public RefreshToken findByRefreshToken(String refreshToken) {
		Optional<RefreshToken> optional = dao.findByRefreshToken(refreshToken);
		if (optional.isPresent()) {
			return optional.get();
		}
		return null;
	}

	@Override
	public boolean isRefreshTokenValid(RefreshToken refreshToken) {
		if (refreshToken.getExpireDate().before(new Date())) {
			return false;
		}
		return true;
	}

	@Override
	public RefreshToken createRefreshToken(RefreshToken refreshToken) {
		return save(refreshToken);
	}

	@Override
	public void deleteRefreshToken(RefreshToken refreshToken) {
		delete(refreshToken);
	}

}
