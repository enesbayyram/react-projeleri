package com.enesbayram.hr.dto;

import java.util.ArrayList;
import java.util.List;

import com.enesbayram.hr.dto.base.DtoEntityModel;
import com.enesbayram.hr.enums.MenuType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DtoScreenMenu extends DtoEntityModel{
	
	private String icon;

	private String menuLink;

	private String menuText;

	private MenuType menuType;

	private Boolean isActive;
	
	private String parentMenuId;
	
	private List<DtoScreenMenu> children = new ArrayList<>();
	
}
