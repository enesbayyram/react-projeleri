package com.enesbayram.hr.dto;

import com.enesbayram.hr.dto.base.DtoEntityModel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DtoRoleAuthorization extends DtoEntityModel{

	private static final long serialVersionUID = 1L;

	private DtoRoleDef roleDef;
	
	private DtoAuthorizationDef authorizationDef;
}
