package com.enesbayram.hr.controller;

import java.util.List;

import com.enesbayram.hr.dto.DtoRoleAuthorization;
import com.enesbayram.hr.model.api.HrRootEntity;

public interface IRestRoleAuthorizationController {

	HrRootEntity<List<DtoRoleAuthorization>> getAuthorizationsByRoleId(String roleId);
}
