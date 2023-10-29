package com.enesbayram.questapp.controller.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.enesbayram.questapp.controller.IRestPostController;
import com.enesbayram.questapp.dto.DtoPost;
import com.enesbayram.questapp.dto.DtoPostUI;
import com.enesbayram.questapp.entities.Post;
import com.enesbayram.questapp.entities.RestRootEntity;
import com.enesbayram.questapp.service.IPostService;

@RestController
@RequestMapping("/posts")
public class RestPostControllerImpl extends RestBaseController implements IRestPostController {

	@Autowired
	private IPostService postService;

	@GetMapping
	@Override
	public RestRootEntity<List<DtoPost>> getAllPostsWithParams(@RequestParam(required = false) Long postId,
			@RequestParam(required = false) Long userId) {
		return ok(postService.getAllPostsWithParams(postId, userId));
	}

	@GetMapping("/{postId}")
	@Override
	public RestRootEntity<Post> findPostById(@PathVariable Long postId) {
		return ok(postService.findPostById(postId));
	}

	@PostMapping
	@Override
	public RestRootEntity<DtoPost> savePost(@RequestBody DtoPostUI dtoPost) {
		return ok(postService.savePost(dtoPost));
	}

	@PutMapping("/{postId}")
	@Override
	public RestRootEntity<Post> updatePost(@PathVariable Long postId, @RequestBody DtoPostUI updatePost) {
		return ok(postService.updatePost(postId, updatePost));
	}

	@DeleteMapping("/{postId}")
	@Override
	public RestRootEntity<String> deletePost(@PathVariable Long postId) {
		return ok(postService.deletePost(postId));
	}


}
