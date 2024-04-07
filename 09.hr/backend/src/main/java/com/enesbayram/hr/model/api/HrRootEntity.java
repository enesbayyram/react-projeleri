package com.enesbayram.hr.model.api;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HrRootEntity<T>{
	
	private T data;
	
	private String errorMessage;
	
	private boolean result;
	
	
	public static <T> HrRootEntity<T> ok(T data){
		HrRootEntity<T> response = new HrRootEntity<>();
		response.setData(data);
		response.setErrorMessage(null);
		response.setResult(true);
		
		return response;
	}
	
	public static <T> HrRootEntity<T> error(String errorMessage){
		HrRootEntity<T> response  = new HrRootEntity<>();
		response.setData(null);
		response.setErrorMessage(errorMessage);
		response.setResult(false);
		return response;
	}
}
