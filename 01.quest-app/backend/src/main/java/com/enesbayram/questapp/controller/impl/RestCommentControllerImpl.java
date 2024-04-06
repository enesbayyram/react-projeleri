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

import com.enesbayram.questapp.api.model.UserActivityCommentResponse;
import com.enesbayram.questapp.controller.IRestCommentController;
import com.enesbayram.questapp.dto.DtoComment;
import com.enesbayram.questapp.dto.DtoCommentUI;
import com.enesbayram.questapp.entities.Comment;
import com.enesbayram.questapp.entities.RestRootEntity;
import com.enesbayram.questapp.service.ICommentService;

@RestController
@RequestMapping("/comments")
public class RestCommentControllerImpl extends RestBaseController implements IRestCommentController {

	@Autowired
	private ICommentService commentService;

	@GetMapping
	@Override
	public RestRootEntity<List<DtoComment>> getAllCommentsWithParams(@RequestParam(required = false) Long userId,
			@RequestParam(required = false) Long postId) {
		return ok(commentService.getAllCommentsWithParams(userId, postId));
	}

	@GetMapping("/{commentId}")
	@Override
	public RestRootEntity<Comment> findCommentById(@PathVariable Long commentId) {
		return ok(commentService.findCommentById(commentId));
	}

	@PostMapping
	@Override
	public RestRootEntity<DtoComment> saveComment(@RequestBody DtoCommentUI dtoCommentUI) {
		return ok(commentService.saveComment(dtoCommentUI));
	}

	@PutMapping("/{commentId}")
	@Override
	public RestRootEntity<Comment> updateComment(@PathVariable Long commentId, @RequestBody DtoCommentUI dtoCommentUI) {
		return ok(commentService.updateComment(commentId, dtoCommentUI));
	}

	@DeleteMapping("/{commentId}")
	@Override
	public RestRootEntity<String> deleteComment(@PathVariable Long commentId) {
		return ok(commentService.deleteComment(commentId));
	}

	@GetMapping("/activity/{userId}")
	@Override
	public RestRootEntity<List<UserActivityCommentResponse>> getUserActivityCommentsByUserId(@PathVariable Long userId) {
		return ok(commentService.getUserActivityCommentsByUserId(userId));
	}

}
