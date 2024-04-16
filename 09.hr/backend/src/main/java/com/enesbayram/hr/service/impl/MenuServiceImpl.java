package com.enesbayram.hr.service.impl;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.enesbayram.hr.dto.DtoMenu;
import com.enesbayram.hr.entity.Menu;
import com.enesbayram.hr.repository.MenuRepository;
import com.enesbayram.hr.service.IMenuService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class MenuServiceImpl extends BaseDbServiceImpl<MenuRepository, Menu> implements IMenuService{

	@Override
	public Class<?> getDTOClassForService() {
		return DtoMenu.class;
	}

	@Override
	public List<DtoMenu> getMenuListByRoleCode(String roleCode) {
		Optional<List<Menu>> optional = dao.getMenuListByRoleCode(roleCode);
		if(optional.isPresent()) {
			return toDTOList(optional.get());
		}
		return Collections.emptyList();
	}
	
	

}
