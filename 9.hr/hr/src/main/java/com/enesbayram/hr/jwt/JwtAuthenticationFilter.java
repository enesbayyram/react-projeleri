package com.enesbayram.hr.jwt;

import java.io.IOException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

	private final JwtService jwtService;

	private final UserDetailsService userDetailsService;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		String header = request.getHeader("Authorization");
		String token;
		String username;

		if (header == null) {
			filterChain.doFilter(request, response);
			return;
		}
		token = header.substring(7);
		try {
			username = jwtService.extractUsernameFromToken(token);
			if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
				UserDetails userDetails = userDetailsService.loadUserByUsername(username);
				if (userDetails != null) {
					if (jwtService.tokenControl(token, userDetails)) {
						UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(userDetails,
								null, userDetails.getAuthorities());
						auth.setDetails(userDetails);
						SecurityContextHolder.getContext().setAuthentication(auth);
					}
				}
			}
		} catch (ExpiredJwtException ex) {
			logger.error("Token expired olmustur : " + ex.getMessage());
		} catch (Exception e) {
			logger.error("Token alinirken hata olusmustur : " + e.getMessage());
		}
		filterChain.doFilter(request, response);
	}

}
