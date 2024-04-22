package com.enesbayram.hr.service;

import java.util.List;

import com.enesbayram.hr.dto.DtoScreenMenu;
import com.enesbayram.hr.entity.Menu;

public interface IMenuService extends BaseDbService<Menu>{

	List<DtoScreenMenu> getCurrentUserAuthorizedMenu();
}
