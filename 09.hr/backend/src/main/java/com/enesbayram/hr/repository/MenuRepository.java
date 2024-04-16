package com.enesbayram.hr.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.enesbayram.hr.entity.Menu;

@Repository
public interface MenuRepository extends BaseDaoRepository<Menu>{

	@Query(value = "select m from RoleAuthorization ra"
			+ " LEFT JOIN AuthorizationDef ad ON ra.authorizationDef.id = ad.id"
			+ " LEFT JOIN Menu m ON ad.menu.id = m.id"
			+ " WHERE ra.roleDef.roleCode= :roleCode")
	Optional<List<Menu>> getMenuListByRoleCode(String roleCode);
	
}