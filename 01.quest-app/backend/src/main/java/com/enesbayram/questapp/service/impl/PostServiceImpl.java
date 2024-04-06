package com.enesbayram.questapp.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enesbayram.questapp.dto.DtoPost;
import com.enesbayram.questapp.dto.DtoPostUI;
import com.enesbayram.questapp.entities.Post;
import com.enesbayram.questapp.entities.User;
import com.enesbayram.questapp.repository.PostRepository;
import com.enesbayram.questapp.service.IPostService;
import com.enesbayram.questapp.service.IUserService;

@Service
public class PostServiceImpl implements IPostService {

	@Autowired
	private PostRepository postRepository;

	@Autowired
	private IUserService userService;

	@Override
	public List<DtoPost> getAllPostsWithParams(Long postId, Long userId) {
		List<DtoPost> dtoList = new ArrayList<>();
		Optional<List<Post>> optional = postRepository.getAllPostsWithParams(postId, userId);
		if (optional.isPresent()) {
			
			for (Post post : optional.get()) {
				dtoList.add(new DtoPost(post.getId(), post.getUser().getId(), post.getUser().getUsername(),
						post.getTitle(), post.getText(), post.getCreateDate()));
			}
		}
		return dtoList;
	}

	@Override
	public Post findPostById(Long postId) {
		return postRepository.findById(postId).orElse(null);
	}

	@Override
	public DtoPost savePost(DtoPostUI createPost) {
		User user = userService.findUserById(createPost.getUserId());
		DtoPost response = null;
		if (user != null) {
			Post newPost = new Post();
			newPost.setText(createPost.getText());
			newPost.setTitle(createPost.getTitle());
			newPost.setUser(user);

			Post savedPost = postRepository.save(newPost);
			response = new DtoPost(savedPost.getId(), savedPost.getUser().getId(), savedPost.getUser().getUsername(),
					savedPost.getTitle(), savedPost.getText(), new Date());
		}
		return response;
	}

	@Override
	public Post updatePost(Long postId, DtoPostUI updatePost) {
		Optional<Post> optional = postRepository.findById(postId);
		if (optional.isPresent()) {
			Post dbPost = optional.get();
			dbPost.setText(updatePost.getText());
			dbPost.setTitle(updatePost.getTitle());

			postRepository.save(dbPost);

			return dbPost;
		}
		return null;
	}

	@Override
	public String deletePost(Long postId) {
		Optional<Post> optional = postRepository.findById(postId);
		if (optional.isPresent()) {
			postRepository.deleteById(postId);
			return "post deleted";
		}
		return postId + " li post bulunamadi";
	}

}
