package com.enesbayram.hr.model.api;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AuthResponse {

	private String token;
	
	private String refreshToken;
}
