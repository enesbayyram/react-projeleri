package com.enesbayram.hr.security.config;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.enesbayram.hr.handler.HRAuthenticationEntryPoint;
import com.enesbayram.hr.jwt.JwtAuthenticationFilter;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig{
	
	private final AuthenticationProvider authenticationProvider;

	private final JwtAuthenticationFilter jwtAuthenticationFilter;
	
	private final HRAuthenticationEntryPoint authenticationEntryPoint;
	
	private static final String AUTHENTICATE = "/authenticate";
//	private static final String REGISTER = "/register";
	private static final String REFREFH_TOKEN = "/refreshToken";

	private static final String[] AUTH_WHITELIST = { "/v2/api-docs", "v2/api-docs", "/swagger-resources",
			"swagger-resources", "/swagger-resources/**", "swagger-resources/**", "/configuration/ui",
			"configuration/ui", "/configuration/security", "configuration/security", "/swagger-ui.html",
			"swagger-ui.html", "webjars/**", "/v3/api-docs/**", "v3/api-docs/**", "/swagger-ui/**", "swagger-ui/**",
			"/csa/api/token", "/actuator/**", "/health/**" };

	
	
	
	@SuppressWarnings("removal")
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
		.csrf(AbstractHttpConfigurer::disable)
		.authorizeHttpRequests(request -> 
		 request.requestMatchers(AUTHENTICATE, REFREFH_TOKEN).permitAll()
		.requestMatchers(AUTH_WHITELIST).permitAll()
		.anyRequest()
		.authenticated())
		.exceptionHandling().authenticationEntryPoint(authenticationEntryPoint).and()
		.sessionManagement(manager -> manager.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
		.authenticationProvider(authenticationProvider)
		.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
		
		return http.build();
	}

	@Bean
	public CorsFilter corsFilter() {
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		final CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(false);
		config.setAllowedOrigins(Arrays.asList("*"));
		config.setAllowedHeaders(
				Arrays.asList("Origin", "Content-Type", "Accept", "Authorization", "Access-Control-Allow-Origin"));
		config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "OPTIONS", "DELETE", "PATCH"));
		source.registerCorsConfiguration("/**", config);
		return new CorsFilter(source);
	}

}
