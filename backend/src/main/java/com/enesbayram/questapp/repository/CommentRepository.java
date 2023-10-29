package com.enesbayram.questapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.enesbayram.questapp.api.model.UserActivityCommentResponse;
import com.enesbayram.questapp.entities.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

	@EntityGraph(attributePaths = { "post", "user" })
	@Query("select c from Comment c where (:userId is null or c.user.id=:userId) and (:postId is null or c.post.id=:postId)")
	Optional<List<Comment>> getAllCommentsWithParams(Long userId, Long postId);

	@EntityGraph(attributePaths = { "post"})
	@Query(value = "select c from Comment c WHERE c.user.id=:userId")
	Optional<List<Comment>> getUserActivityCommentsByUserId(@Param("userId") Long userId);
}
