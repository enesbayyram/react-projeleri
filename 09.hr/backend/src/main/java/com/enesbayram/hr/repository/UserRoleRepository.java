package com.enesbayram.hr.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.EntityGraph.EntityGraphType;
import org.springframework.stereotype.Repository;

import com.enesbayram.hr.entity.UserRole;

@Repository
public interface UserRoleRepository extends BaseDaoRepository<UserRole>{

	@Query(value = "select ur from UserRole ur WHERE ur.userDef.id= :userId")
	@EntityGraph(value = "user_role_graph_details" , type =  EntityGraphType.FETCH)
	Optional<List<UserRole>> findUserRolesByUserId(String userId);
}
