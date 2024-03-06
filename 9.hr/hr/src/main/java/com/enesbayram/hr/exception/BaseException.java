package com.enesbayram.hr.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class BaseException extends RuntimeException{

	
	public BaseException(String errorMessage) {
		super(errorMessage);
	}
	
}
