package com.enesbayram.questapp.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DtoPost {
	
	private Long id;
	
	private Long userId;
	
	private String username;

	private String title;

	private String text;
	
	private Date createDate;
}
