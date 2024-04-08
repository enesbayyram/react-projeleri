package com.enesbayram.hr.service.impl;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.enesbayram.hr.entity.UserRole;
import com.enesbayram.hr.repository.UserRoleRepository;
import com.enesbayram.hr.service.IUserRoleService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserRoleServiceImpl extends BaseDbServiceImpl<UserRoleRepository, UserRole> implements IUserRoleService {

	@Override
	public Class<?> getDTOClassForService() {
		return null;
	}

	@Override
	public List<UserRole> findUserRolesByUserId(String userId) {
		Optional<List<UserRole>> optional = dao.findUserRolesByUserId(userId);
		if (optional.isPresent()) {
			return optional.get();
		}
		return Collections.emptyList();
	}

}
