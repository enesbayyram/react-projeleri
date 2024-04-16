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
public class DtoAuthorizationDef extends DtoEntityModel{

	private String description;
	
	private String shortCode;
	
//	private Menu menu;
	
	private Boolean isActive;
}
