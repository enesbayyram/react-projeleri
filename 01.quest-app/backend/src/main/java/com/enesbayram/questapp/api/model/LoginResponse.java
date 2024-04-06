package com.enesbayram.questapp.api.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginResponse {

	private String token;
	
	private String refreshToken;
	
	private Long userId;
	
	private String username;
}
