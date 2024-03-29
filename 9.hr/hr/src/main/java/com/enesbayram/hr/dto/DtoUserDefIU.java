package com.enesbayram.hr.dto;

import com.enesbayram.hr.dto.base.DtoCrudModel;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DtoUserDefIU extends DtoCrudModel{

	private static final long serialVersionUID = 1L;

	private String firstname;

	private String lastname;

	private String username;

	private String password;

}
