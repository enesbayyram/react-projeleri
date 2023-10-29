package com.enesbayram.questapp.service;

import java.util.List;

import com.enesbayram.questapp.dto.DtoPost;
import com.enesbayram.questapp.dto.DtoPostUI;
import com.enesbayram.questapp.entities.Post;

public interface IPostService {

	List<DtoPost> getAllPostsWithParams(Long postId , Long userId);
	
	Post findPostById(Long postId);
	
	DtoPost savePost(DtoPostUI post);
	
	Post updatePost(Long postId , DtoPostUI updatePost);
	
	String deletePost(Long postId);
	
}
