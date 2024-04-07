package com.enesbayram.hr.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HrMessage {

	private HRMessageType messageType;
	private String ofStatic;

	public HrMessage() {

	}

	public HrMessage(HRMessageType messageType, String ofStatic) {
		this.messageType = messageType;
		this.ofStatic = ofStatic;
	}

	public String prepareMessage() {
		StringBuilder builder = new StringBuilder();
		if(ofStatic!=null) {
			builder.append(getOfStatic() + " ");
		}
		builder.append(getMessageType().getMessage());
		return builder.toString();
	}

}
