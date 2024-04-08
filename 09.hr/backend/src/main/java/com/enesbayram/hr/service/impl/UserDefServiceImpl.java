package com.enesbayram.hr.service.impl;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.enesbayram.hr.entity.UserDef;
import com.enesbayram.hr.repository.UserDefRepository;
import com.enesbayram.hr.service.IUserDefService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserDefServiceImpl extends BaseDbServiceImpl<UserDefRepository, UserDef> implements IUserDefService {

	@Override
	public Class<?> getDTOClassForService() {
		return null;
	}

	@Override
	public UserDef findByUsername(String username) {
		Optional<UserDef> optional = dao.findByUsername(username);
		if (optional.isPresent()) {
			return optional.get();
		}
		return null;
	}

}
