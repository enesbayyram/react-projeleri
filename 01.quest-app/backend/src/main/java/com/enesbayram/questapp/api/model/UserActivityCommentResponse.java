package com.enesbayram.questapp.api.model;

import java.io.Serializable;

import lombok.Data;

@Data
public class UserActivityCommentResponse {

	private Long commentId;
	
	private Long postId;

	private String postTitle;
	
	private String commentText;
	
}
