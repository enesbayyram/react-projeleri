package com.enesbayram.questapp.dto;

import lombok.Data;

@Data
public class DtoCommentUI {

	private String text;
	
	private Long userId;
	
	private Long postId;
}
