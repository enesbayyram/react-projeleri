package com.enesbayram.hr.handler;

import java.io.IOException;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class HRAuthenticationEntryPoint implements AuthenticationEntryPoint{
	
//	private final HandlerExceptionResolver handlerExceptionResolver;

	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException authException) throws IOException, ServletException {
//		handlerExceptionResolver.resolveException(request, response, null, new HRBaseException(new HrMessage(HRMessageType.TOKEN_EXPIRED_1005, null)));
		response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
	}

}
