package com.enesbayram.hr.service.impl;

import java.util.Date;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.enesbayram.hr.entity.RefreshToken;
import com.enesbayram.hr.entity.UserDef;
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
		// 15.44      16.00
		if (refreshToken.getExpireDate().after(new Date())) {
			return true;
		}
		return false;
	}

	@Override
	public RefreshToken createRefreshToken(RefreshToken refreshToken) {
		return save(refreshToken);
	}

	@Override
	public void deleteRefreshToken(RefreshToken refreshToken) {
		delete(refreshToken);
	}

	@Override
	public RefreshToken findRefreshTokenByUserDef(UserDef userDef) {
		Optional<RefreshToken> optional = dao.findRefreshTokenByUserDef(userDef);
		if (optional.isPresent()) {
			return optional.get();
		}
		return null;
	}

}
