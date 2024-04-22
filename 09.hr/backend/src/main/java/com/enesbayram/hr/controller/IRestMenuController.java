package com.enesbayram.hr.controller;

import java.util.List;

import com.enesbayram.hr.dto.DtoScreenMenu;
import com.enesbayram.hr.model.api.HrRootEntity;

public interface IRestMenuController {
	
	HrRootEntity<List<DtoScreenMenu>> getCurrentUserAuthorizedMenu();

}
