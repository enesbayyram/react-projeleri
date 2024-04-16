package com.enesbayram.hr.service;

import java.util.List;

import com.enesbayram.hr.dto.DtoRoleAuthorization;
import com.enesbayram.hr.entity.RoleAuthorization;

public interface IRoleAuthorizationService extends BaseDbService<RoleAuthorization>{

	List<DtoRoleAuthorization> getAuthorizationsByRoleId(String roleId);
}
