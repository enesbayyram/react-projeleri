package com.enesbayram.hr.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.enesbayram.hr.dto.DtoRoleAuthorization;
import com.enesbayram.hr.dto.base.DtoBaseModel;
import com.enesbayram.hr.entity.RoleAuthorization;
import com.enesbayram.hr.repository.RoleAuthorizationRepository;
import com.enesbayram.hr.service.IAuthorizationDefService;
import com.enesbayram.hr.service.IRoleAuthorizationService;
import com.enesbayram.hr.service.IRoleDefService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class RoleAuthorizationServiceImpl extends BaseDbServiceImpl<RoleAuthorizationRepository, RoleAuthorization>
implements IRoleAuthorizationService{
	
	private final IRoleDefService roleDefService;
	
	private final IAuthorizationDefService authorizationDefService;
	
	@Override
	public Class<?> getDTOClassForService() {
		return DtoRoleAuthorization.class;
	}

	@Override
	public List<DtoRoleAuthorization> getAuthorizationsByRoleId(String roleCode) {
		Optional<List<RoleAuthorization>> optional = dao.getAuthorizationsByRoleId(roleCode);
		if(optional.isPresent()) {
			return toDTOList(optional.get());
		}
		return Collections.emptyList();
	}
	
	

	@SuppressWarnings("unchecked")
	@Override
	public <D extends DtoBaseModel> D toDTO(RoleAuthorization dbEntity) {
		DtoRoleAuthorization dto = super.toDTO(dbEntity);
		if(dbEntity.getRoleDef()!=null) {
			dto.setRoleDef(roleDefService.toDTO(dbEntity.getRoleDef()));
		}
		if(dbEntity.getAuthorizationDef()!=null) {
			dto.setAuthorizationDef(authorizationDefService.toDTO(dbEntity.getAuthorizationDef()));
		}
		return (D) dto;
	}
	@Override
	public <D extends DtoBaseModel> List<D> toDTOList(List<RoleAuthorization> list) {
		List<D> dtoList = new ArrayList<>();
		for (RoleAuthorization t : list) {
			dtoList.add(toDTO(t));
		}
		return dtoList;
	}
	
	

}
