package com.enesbayram.hr.handler;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.enesbayram.hr.exception.HRBaseException;
import com.enesbayram.hr.utils.HRDateUtils;

@ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler({ HRBaseException.class })
	public ResponseEntity<ApiError> handleException(HRBaseException hrBaseException) {
		return ResponseEntity.internalServerError().body(createApiError(hrBaseException));
	}

	public ApiError createApiError(HRBaseException exception) {
		ApiError apiError = new ApiError();
		apiError.setTimestamp(HRDateUtils.getddMMYYYYHHmmss(new Date()));
		apiError.setStatus(HttpStatus.INTERNAL_SERVER_ERROR);
		apiError.setMessage(exception.getMessage());

		return apiError;
	}
}
