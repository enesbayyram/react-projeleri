package com.enesbayram.questapp.service;

import java.util.List;

import com.enesbayram.questapp.api.model.UserActivityCommentResponse;
import com.enesbayram.questapp.dto.DtoComment;
import com.enesbayram.questapp.dto.DtoCommentUI;
import com.enesbayram.questapp.entities.Comment;

public interface ICommentService {

	List<DtoComment> getAllCommentsWithParams(Long userId , Long postId);
	
	Comment findCommentById(Long commentId);
	
	DtoComment saveComment(DtoCommentUI dtoCommentUI);
	
	Comment updateComment(Long commentId,DtoCommentUI dtoCommentUI);
	
	String deleteComment(Long commentId);

	List<UserActivityCommentResponse> getUserActivityCommentsByUserId(Long userId);
	
}
