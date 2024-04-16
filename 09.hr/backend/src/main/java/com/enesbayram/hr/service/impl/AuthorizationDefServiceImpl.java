package com.enesbayram.hr.service.impl;

import org.springframework.stereotype.Service;

import com.enesbayram.hr.dto.DtoAuthorizationDef;
import com.enesbayram.hr.entity.AuthorizationDef;
import com.enesbayram.hr.repository.AuthorizationDefRepository;
import com.enesbayram.hr.service.IAuthorizationDefService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class AuthorizationDefServiceImpl extends BaseDbServiceImpl<AuthorizationDefRepository, AuthorizationDef>
implements IAuthorizationDefService{
	
	@Override
	public Class<?> getDTOClassForService() {
		return DtoAuthorizationDef.class;
	}
	
	

}
