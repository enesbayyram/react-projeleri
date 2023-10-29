package com.enesbayram.questapp.exception;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RestErrorResponse {

	private HttpStatus httpStatus;
	private String message;

}
