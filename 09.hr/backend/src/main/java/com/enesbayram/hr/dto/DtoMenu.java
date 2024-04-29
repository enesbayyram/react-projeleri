package com.enesbayram.hr.dto;

import com.enesbayram.hr.dto.base.DtoEntityModel;
import com.enesbayram.hr.enums.MenuType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DtoMenu extends DtoEntityModel{

	private static final long serialVersionUID = 1L;

	private String icon;

	private String menuLink;

	private String menuText;

	private MenuType menuType;

	private Boolean isActive;
	
	private String parentMenuId;
}
