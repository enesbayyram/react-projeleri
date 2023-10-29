package com.enesbayram.questapp.exception;

import javax.servlet.ServletException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class RestResponseExceptionHandler {

	 @ExceptionHandler(value = { ServletException.class })
	  public ResponseEntity servletException(ServletException e) {
	    String message = e.getMessage();
	    HttpStatus httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
	    if (message.equals("token_expired")) {
	      httpStatus = HttpStatus.UNAUTHORIZED;
	      message = "the token is expired and not valid anymore";
	    }
	    RestErrorResponse restErrorResponse = new RestErrorResponse(httpStatus, message);
	    return ResponseEntity.status(httpStatus).body(restErrorResponse);
	  }
}
