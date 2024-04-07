package com.enesbayram.hr.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.EntityGraph.EntityGraphType;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.enesbayram.hr.entity.RefreshToken;
import com.enesbayram.hr.entity.UserDef;

@Repository
public interface RefreshTokenRepository extends BaseDaoRepository<RefreshToken>{
	
	@Query(value = "select rt from RefreshToken rt where rt.refreshToken = :refreshToken")
	Optional<RefreshToken> findByRefreshToken(String refreshToken);
	
	
	@EntityGraph(value = "refresh_graph_details" , type=EntityGraphType.FETCH)
	Optional<RefreshToken> findRefreshTokenByUserDef(UserDef userDef);

}
