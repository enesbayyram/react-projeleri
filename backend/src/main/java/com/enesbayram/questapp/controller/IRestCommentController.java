package com.enesbayram.questapp.controller;

import java.util.List;

import com.enesbayram.questapp.api.model.UserActivityCommentResponse;
import com.enesbayram.questapp.dto.DtoComment;
import com.enesbayram.questapp.dto.DtoCommentUI;
import com.enesbayram.questapp.entities.Comment;
import com.enesbayram.questapp.entities.RestRootEntity;

public interface IRestCommentController {

	RestRootEntity<List<DtoComment>> getAllCommentsWithParams(Long userId, Long postId);

	RestRootEntity<Comment> findCommentById(Long commentId);

	RestRootEntity<DtoComment> saveComment(DtoCommentUI dtoCommentUI);

	RestRootEntity<Comment> updateComment(Long commentId, DtoCommentUI dtoCommentUI);

	RestRootEntity<String> deleteComment(Long commentId);
	
	RestRootEntity<List<UserActivityCommentResponse>> getUserActivityCommentsByUserId(Long userId);
}
