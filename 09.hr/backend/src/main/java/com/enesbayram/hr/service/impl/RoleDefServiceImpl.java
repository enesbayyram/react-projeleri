package com.enesbayram.hr.service.impl;

import org.springframework.stereotype.Service;

import com.enesbayram.hr.dto.DtoRoleDef;
import com.enesbayram.hr.entity.RoleDef;
import com.enesbayram.hr.repository.RoleDefRepository;
import com.enesbayram.hr.service.IRoleDefService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class RoleDefServiceImpl extends BaseDbServiceImpl<RoleDefRepository, RoleDef> implements IRoleDefService{
	
	@Override
	public Class<?> getDTOClassForService() {
		return DtoRoleDef.class;
	}

}
