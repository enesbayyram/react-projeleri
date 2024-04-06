package com.enesbayram.hr.enums;

import lombok.Getter;

@Getter
public enum DateFormatType {

	DD_MM_YYYY_HH_MM_SS("dd-MM-yyy HH:mm:ss");

	private String value;
	

	private DateFormatType(String value) {
		this.value = value;
	}
}
