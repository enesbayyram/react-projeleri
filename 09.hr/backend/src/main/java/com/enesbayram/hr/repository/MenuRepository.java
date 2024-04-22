package com.enesbayram.hr.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.EntityGraph.EntityGraphType;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.enesbayram.hr.entity.Menu;

@Repository
public interface MenuRepository extends BaseDaoRepository<Menu>{

	@EntityGraph(value = "menu_details" , type = EntityGraphType.FETCH)
	@Query(value = "select m from RoleAuthorization ra"
			+ " INNER JOIN AuthorizationDef ad ON ra.authorizationDef.id = ad.id"
			+ " INNER JOIN Menu m ON ad.menu.id = m.id"
			+ " WHERE ra.roleDef.roleCode= :roleCode")
	List<Menu> getMenuListByRoleCode(String roleCode);
	
}