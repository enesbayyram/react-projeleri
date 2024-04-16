package com.enesbayram.hr.controller.impl;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.enesbayram.hr.controller.IRestRoleAuthorizationController;
import com.enesbayram.hr.dto.DtoRoleAuthorization;
import com.enesbayram.hr.model.api.HrRootEntity;
import com.enesbayram.hr.service.IRoleAuthorizationService;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class RestRoleAuthorizationControllerImpl extends RestBaseController implements IRestRoleAuthorizationController{

	private final IRoleAuthorizationService roleAuthorizationService;
	
	
	@Operation(summary = "${hr.api.permit-all.get-authorizations-by-role-id.description}")
	@GetMapping("/get-authorizations-by-role-id/{roleCode}")
	@Override
	public HrRootEntity<List<DtoRoleAuthorization>> getAuthorizationsByRoleId(@PathVariable("roleCode") String roleCode) {
		return ok(roleAuthorizationService.getAuthorizationsByRoleId(roleCode));
	}

	
}
