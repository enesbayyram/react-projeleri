package com.enesbayram.hr.controller;

import java.util.List;

import com.enesbayram.hr.dto.DtoMenu;
import com.enesbayram.hr.model.api.HrRootEntity;

public interface IRestMenuController {
	
	HrRootEntity<List<DtoMenu>> getMenuListByRoleCode(String roleCode);

}
