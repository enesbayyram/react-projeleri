package com.enesbayram.hr.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.EntityGraph.EntityGraphType;
import org.springframework.stereotype.Repository;

import com.enesbayram.hr.entity.RoleAuthorization;

@Repository
public interface RoleAuthorizationRepository extends BaseDaoRepository<RoleAuthorization>{
	
	@EntityGraph(value = "role_authorization_graph_details" , type = EntityGraphType.FETCH)
	@Query(value = "select ra from RoleAuthorization ra WHERE ra.roleDef.roleCode= :roleCode")
	Optional<List<RoleAuthorization>> getAuthorizationsByRoleId(String roleCode);

}
