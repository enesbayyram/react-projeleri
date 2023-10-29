package com.enesbayram.questapp.entities;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Data;

@Data
@JsonInclude(content = Include.NON_NULL)
public class RestRootEntity<T> {

	private T data;

	private boolean result;

	private String errorMessage;
	
	public static <T> RestRootEntity<T> create(T data , boolean result , String errorMessage) {
		RestRootEntity<T> obj = new RestRootEntity<T>();
		obj.setData(data);
		obj.setResult(result);
		obj.setErrorMessage(errorMessage);
		
		return obj;
	}
	
	public static <T> RestRootEntity<T> ok(T data) {
		return create(data, true, "");
	}
	
	public static <T> RestRootEntity<T> error(String errorMessage){
		return create(null, false, errorMessage);
	}
}
