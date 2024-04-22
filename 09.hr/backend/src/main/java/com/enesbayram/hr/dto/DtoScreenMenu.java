package com.enesbayram.hr.dto;

import java.util.ArrayList;
import java.util.List;

import com.enesbayram.hr.dto.base.DtoEntityModel;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DtoScreenMenu extends DtoEntityModel{
	
	public DtoScreenMenu(DtoMenu parentMenu) {
		this.parentMenu = parentMenu;
	}

	private DtoMenu parentMenu;
	
	private List<DtoMenu> children = new ArrayList<>();
}
