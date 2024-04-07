package com.enesbayram.hr.exception;

public class HRBaseException extends RuntimeException{


	private static final long serialVersionUID = 1L;

	public HRBaseException() {

	}
	
	public HRBaseException(HrMessage message) {
		super(message.prepareMessage());
	}
}
