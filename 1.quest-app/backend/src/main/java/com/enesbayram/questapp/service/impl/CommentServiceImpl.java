package com.enesbayram.questapp.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enesbayram.questapp.api.model.UserActivityCommentResponse;
import com.enesbayram.questapp.dto.DtoComment;
import com.enesbayram.questapp.dto.DtoCommentUI;
import com.enesbayram.questapp.entities.Comment;
import com.enesbayram.questapp.entities.Post;
import com.enesbayram.questapp.entities.User;
import com.enesbayram.questapp.repository.CommentRepository;
import com.enesbayram.questapp.service.ICommentService;
import com.enesbayram.questapp.service.IPostService;
import com.enesbayram.questapp.service.IUserService;

@Service
public class CommentServiceImpl implements ICommentService {

	@Autowired
	private CommentRepository commentRepository;

	@Autowired
	private IUserService userService;

	@Autowired
	private IPostService postService;

	@Override
	public List<DtoComment> getAllCommentsWithParams(Long userId, Long postId) {
		Optional<List<Comment>> optional = commentRepository.getAllCommentsWithParams(userId, postId);
		List<DtoComment> dtoList = new ArrayList<>();

		if (optional.isPresent()) {
			for (Comment comment : optional.get()) {
				dtoList.add(new DtoComment(comment.getId(), comment.getPost().getId(), comment.getUser().getId(),
						comment.getUser().getUsername(), comment.getText() , comment.getUser().getAvatar()));
			}
		}
		return dtoList;
	}

	@Override
	public Comment findCommentById(Long commentId) {
		return commentRepository.findById(commentId).orElse(null);
	}

	@Override
	public DtoComment saveComment(DtoCommentUI dtoCommentUI) {
		DtoComment response = null;
		User user = userService.findUserById(dtoCommentUI.getUserId());
		Post post = postService.findPostById(dtoCommentUI.getPostId());
		if (user != null && post != null) {
			Comment saveComment = new Comment();
			saveComment.setUser(user);
			saveComment.setPost(post);
			saveComment.setText(dtoCommentUI.getText());

			Comment savedComment = commentRepository.save(saveComment);

			response = new DtoComment(saveComment.getId(), post.getId(), user.getId(), user.getUsername(),
					dtoCommentUI.getText(),null);
		}
		return response;
	}

	@Override
	public Comment updateComment(Long commentId, DtoCommentUI dtoCommentUI) {
		Optional<Comment> optional = commentRepository.findById(commentId);
		if (optional.isPresent()) {
			Comment updateComment = optional.get();
			updateComment.setText(dtoCommentUI.getText());

			return commentRepository.save(updateComment);
		}
		return null;
	}

	@Override
	public String deleteComment(Long commentId) {
		commentRepository.deleteById(commentId);
		return "comment deleted";
	}

	@Override
	public List<UserActivityCommentResponse> getUserActivityCommentsByUserId(Long userId) {
		Optional<List<Comment>> optional = commentRepository.getUserActivityCommentsByUserId(userId);
		List<UserActivityCommentResponse> list = new ArrayList<>();
		if(optional.isPresent()) {
			for (Comment comment : optional.get()) {
				UserActivityCommentResponse response = new UserActivityCommentResponse();
				response.setCommentId(comment.getId());
				response.setPostId(comment.getPost().getId());
				response.setPostTitle(comment.getPost().getTitle());
				response.setCommentText(comment.getText());
				list.add(response);
				
			}
		}
		return list;
	}

}
