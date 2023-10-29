package com.enesbayram.questapp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DtoLike {

	private Long id;

	private Long userId;

	private Long postId;
}
