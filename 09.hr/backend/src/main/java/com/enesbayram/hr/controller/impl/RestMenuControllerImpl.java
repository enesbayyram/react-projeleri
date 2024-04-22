package com.enesbayram.hr.controller.impl;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enesbayram.hr.controller.IRestMenuController;
import com.enesbayram.hr.dto.DtoScreenMenu;
import com.enesbayram.hr.model.api.HrRootEntity;
import com.enesbayram.hr.service.IMenuService;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class RestMenuControllerImpl extends RestBaseController implements IRestMenuController{

	private final IMenuService menuService;
	
	@Operation(summary = "${hr.api.permit-all.get-current-user-authorized-menu.description}")
	@GetMapping("/get-current-user-authorized-menu")
	@Override
	public HrRootEntity<List<DtoScreenMenu>> getCurrentUserAuthorizedMenu() {
		return ok(menuService.getCurrentUserAuthorizedMenu());
	}

}
