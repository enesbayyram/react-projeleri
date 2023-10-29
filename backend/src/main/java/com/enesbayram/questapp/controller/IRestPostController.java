package com.enesbayram.questapp.controller;

import java.util.List;

import com.enesbayram.questapp.dto.DtoPost;
import com.enesbayram.questapp.dto.DtoPostUI;
import com.enesbayram.questapp.entities.Post;
import com.enesbayram.questapp.entities.RestRootEntity;

public interface IRestPostController {

	RestRootEntity<List<DtoPost>> getAllPostsWithParams(Long postId , Long userId);
	
	RestRootEntity<Post> findPostById(Long postId);
	
	RestRootEntity<DtoPost> savePost(DtoPostUI dtoPost);
	
	RestRootEntity<Post> updatePost(Long postId , DtoPostUI updatePost);
	
	RestRootEntity<String> deletePost(Long postId);

}
