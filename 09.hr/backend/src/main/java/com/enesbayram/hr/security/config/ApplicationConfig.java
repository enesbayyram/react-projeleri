package com.enesbayram.hr.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.enesbayram.hr.exception.HRBaseException;
import com.enesbayram.hr.exception.HRMessageFactory;
import com.enesbayram.hr.exception.HRMessageType;
import com.enesbayram.hr.exception.HrMessage;
import com.enesbayram.hr.repository.UserDefRepository;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {
	
	private final UserDefRepository userDefRepository;

	@Bean
	public UserDetailsService userDetailsService() {
		return username ->userDefRepository.findByUsername(username)
				.orElseThrow(()-> new HRBaseException(new HrMessage(HRMessageType.NO_RECORD_IS_FOUND_1002, HRMessageFactory.ofStatic(username))));
	}
	
	@Bean
	public AuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
		authenticationProvider.setUserDetailsService(userDetailsService());
		authenticationProvider.setPasswordEncoder(bCryptPasswordEncoder());
		return authenticationProvider;
	}
	
	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}
	
	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	
}
