package com.enesbayram.hr.dto;

import com.enesbayram.hr.dto.base.DtoEntityModel;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DtoUserDef extends DtoEntityModel{
	
	private static final long serialVersionUID = 1L;

	private String username;

	private String password;

	private String firstname;

	private String lastname;

	private Boolean isActive;
}
