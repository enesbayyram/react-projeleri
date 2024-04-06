package com.enesbayram.questapp.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Data;

@Data
@JsonInclude(value = Include.NON_NULL)
public class DtoPostUI {

	private String text;

	private String title;

	private Long userId;
}
