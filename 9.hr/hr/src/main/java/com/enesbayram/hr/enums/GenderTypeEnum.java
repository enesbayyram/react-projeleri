package com.enesbayram.hr.enums;

import lombok.Getter;

@Getter
public enum GenderTypeEnum {

	MALE("Erkek"),
	FEMALE("Kadın");
	
	private String genderDesc;
	
	private GenderTypeEnum(String genderDesc) {
		this.genderDesc = genderDesc;
		
		//HERKES GİDER . AYNAYA BAKTIĞINDA GÖRDÜĞÜN ÇOCUK KALIR GERİYE
		//UNUTMA - TEK BAŞINASIN.
	}
}
