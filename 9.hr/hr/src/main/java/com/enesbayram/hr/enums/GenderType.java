package com.enesbayram.hr.enums;

import lombok.Getter;

@Getter
public enum GenderType {

	MALE("Erkek"),
	FEMALE("Kadın");
	
	private String genderDesc;
	
	private GenderType(String genderDesc) {
		this.genderDesc = genderDesc;
		
		//HERKES GİDER . AYNAYA BAKTIĞINDA GÖRDÜĞÜN ÇOCUK KALIR GERİYE
		//UNUTMA - TEK BAŞINASIN.
	}
}
