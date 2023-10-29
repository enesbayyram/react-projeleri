package com.enesbayram.questapp.jwt;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.enesbayram.questapp.exception.RestErrorResponse;

import io.jsonwebtoken.ExpiredJwtException;

@Component
public class JwtAuthenctionFilter extends OncePerRequestFilter{
	
	@Autowired
	private JwtService jwtService;
	
	@Autowired
	private UserDetailsService userDetailsService;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		String header = request.getHeader("Authorization");
		String token;
		String username;
		
		if(header==null) {
			filterChain.doFilter(request, response);
			return;
		}
		token  = header.substring(7);
		try {
			 username =  jwtService.extractUsernameFromToken(token);
			 if(username!=null && SecurityContextHolder.getContext().getAuthentication()==null) {
				 UserDetails userDetails = userDetailsService.loadUserByUsername(username);
				 if(userDetails!=null) {
					 if(jwtService.tokenControl(token, userDetails)) {
						 UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(userDetails, null , userDetails.getAuthorities());
						 auth.setDetails(userDetails);
						 SecurityContextHolder.getContext().setAuthentication(auth);
					 }
				 }
			 }
		}
		catch(ExpiredJwtException ex) {
		System.out.println("ex " + ex.getMessage());
		}
		catch (Exception e) {
			throw e;
		}
		 filterChain.doFilter(request, response);
		
	}

}
