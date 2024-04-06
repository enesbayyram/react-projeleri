package com.enesbayram.hr.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.enesbayram.hr.entity.UserDef;


@Repository
public interface UserDefRepository extends BaseDaoRepository<UserDef>{

	Optional<UserDef> findByUsername(String username);
	
}
