package com.enesbayram.hr.dto;

import com.enesbayram.hr.dto.base.DtoEntityModel;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DtoRoleDef extends DtoEntityModel{

	private String roleName;

	private String roleCode;

	private String description;

	private Boolean isActive;
}
