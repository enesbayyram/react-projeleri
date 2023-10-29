package com.enesbayram.questapp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.enesbayram.questapp.entities.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

	@Query("select p from Post p WHERE (:postId is null or p.id = :postId) and (:userId is null or p.user.id = :userId) order by p.createDate desc")
	Optional<List<Post>> getAllPostsWithParams(Long postId, Long userId);
}
