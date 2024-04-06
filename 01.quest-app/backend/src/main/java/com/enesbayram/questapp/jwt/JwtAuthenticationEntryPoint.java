package com.enesbayram.questapp.jwt;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.www.BasicAuthenticationEntryPoint;
import org.springframework.stereotype.Component;

//@Component
public class JwtAuthenticationEntryPoint{

//	@Override
//	public void commence(HttpServletRequest request, HttpServletResponse response,
//			AuthenticationException authException) throws IOException {
//		response.sendError(HttpServletResponse.SC_UNAUTHORIZED, authException.getMessage());
//	}
}
