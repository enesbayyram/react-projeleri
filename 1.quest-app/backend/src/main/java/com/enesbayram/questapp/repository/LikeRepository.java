package com.enesbayram.questapp.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.enesbayram.questapp.dto.DtoLike;
import com.enesbayram.questapp.entities.Like;

@Repository
public interface LikeRepository extends JpaRepository<Like, Long> {

	@EntityGraph(attributePaths = {"post" , "user"})
	@Query("select l from Like l  where (:userId is null or l.user.id=:userId) and (:postId is null or l.post.id = :postId)")
	Optional<List<Like>> getAllLikesWitParams(Long userId, Long postId);
	
	@Transactional
	@Modifying
	@Query(value = "delete from Like l where l.user.id=:userId and l.post.id=:postId" )
	void deleteLikeByUserAndPostId(@Param("userId") Long userId , @Param("postId") Long postId);
}
