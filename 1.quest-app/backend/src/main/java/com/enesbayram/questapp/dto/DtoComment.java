package com.enesbayram.questapp.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class DtoComment {

	private Long id;
	
	private Long postId;
	
	private Long userId;
	
	private Integer avatar;
	
	private String username;
	
	private String text;

	public DtoComment(Long id, Long postId, Long userId, String username, String text , Integer avatar) {
		this.id = id;
		this.postId = postId;
		this.userId = userId;
		this.username=username;
		this.text = text;
		this.avatar = avatar;
	}
	
	
}
