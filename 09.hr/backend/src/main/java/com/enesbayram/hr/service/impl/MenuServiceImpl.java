package com.enesbayram.hr.service.impl;

import java.awt.RenderingHints.Key;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.stereotype.Service;

import com.enesbayram.hr.dto.DtoMenu;
import com.enesbayram.hr.dto.DtoScreenMenu;
import com.enesbayram.hr.entity.Menu;
import com.enesbayram.hr.entity.UserRole;
import com.enesbayram.hr.enums.MenuType;
import com.enesbayram.hr.repository.MenuRepository;
import com.enesbayram.hr.security.session.ISessionInstanceService;
import com.enesbayram.hr.service.IMenuService;
import com.enesbayram.hr.service.IUserRoleService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class MenuServiceImpl extends BaseDbServiceImpl<MenuRepository, Menu> implements IMenuService {

	private final ISessionInstanceService sessionInstanceService;

	private final IUserRoleService userRoleService;

	@Override
	public Class<?> getDTOClassForService() {
		return DtoMenu.class;
	}

	@Override
	public List<DtoScreenMenu> getCurrentUserAuthorizedMenu() {
		List<UserRole> userRoles = userRoleService
				.findUserRolesByUserId(sessionInstanceService.getUserInformation().getId());
		if (!userRoles.isEmpty()) {
			String roleCode = userRoles.get(0).getRoleDef().getRoleCode();
			List<Menu> menuList = dao.getMenuListByRoleCode(roleCode);
			if (menuList != null && !menuList.isEmpty()) {
				return prepareTreeMenu(menuList);
			}

		}

		return Collections.emptyList();
	}

	public List<Menu> addMenuToMap(List<Menu> menuList, Menu newMenu) {
		menuList.add(newMenu);
		return menuList;
	}

	public List<DtoScreenMenu> prepareTreeMenu(List<Menu> menuList) {
		List<DtoScreenMenu> screenMenuList = new ArrayList<>();
		Map<String, List<Menu>> mapMenu = new HashMap<>();

		for (Menu menu : menuList) {
			if (menu.getMenuType().equals(MenuType.MENU)) {
				screenMenuList.add(new DtoScreenMenu(toDTO(menu)));
			} 
			else if (menu.getMenuType().equals(MenuType.FOLDER) && menu.getParentMenu() != null) {
				String parentId = menu.getParentMenu().getId();

				if (mapMenu.containsKey(parentId)) {
					mapMenu.put(parentId, addMenuToMap(mapMenu.get(parentId), menu));
				} else {
					mapMenu.put(parentId, addMenuToMap(new ArrayList<>(), menu));
				}
			}
		}
		mapMenu.forEach((Key, value) -> {
			screenMenuList.add(new DtoScreenMenu(toDTO(value.get(0).getParentMenu()), toDTOList(value)));
		});

		return screenMenuList;
	}
}
