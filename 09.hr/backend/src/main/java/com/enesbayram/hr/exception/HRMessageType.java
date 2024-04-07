package com.enesbayram.hr.exception;

import lombok.Getter;

@Getter
public enum HRMessageType {

	FIELD_IS_REGUIRED_1001("1001" , "alan boş olamaz"),
	NO_RECORD_IS_FOUND_1002("1002" , "kayıt sistemde bulunmamaktadır."),
	ALREADY_IS_EXIST_1003("1003" , "kayıt sistemde bulunmaktadır"),
	USERNAME_OR_PASSWORD_INCORRECT_1004("1004" , "kullanıcı adı veya şifre hatalı."),
	TOKEN_EXPIRED_1005("1005" , "Tokenın süresi dolmuştur."),
	REFRESH_TOKEN_INVALID_1006("1006" , "Refresh token geçersizdir"),
	REFRESH_TOKEN_EXPIRED_1007("1007" ,"Refresh token süresi bitmiştir"),
	
	
	UNEXPECTED_ERROR_9999("9999" , "Beklenmeyen bir hata oluştu");
	
	private String code;
	private String message;
	
	private HRMessageType(String code , String message) {
		this.code=code;
		this.message = message;
	}
}
