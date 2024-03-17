package com.enesbayram.hr.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.enesbayram.hr.entity.RefreshToken;

@Repository
public interface RefreshTokenRepository extends BaseDaoRepository<RefreshToken>{
	
	@Query(value = "select rt from RefreshToken rt where rt.refreshToken = :refreshToken")
	Optional<RefreshToken> findByRefreshToken(String refreshToken);

}
