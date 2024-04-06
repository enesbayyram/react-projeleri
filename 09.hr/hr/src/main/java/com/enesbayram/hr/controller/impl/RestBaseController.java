package com.enesbayram.hr.controller.impl;

import com.enesbayram.hr.model.api.HrRootEntity;

public class RestBaseController {

	public static <T> HrRootEntity<T> ok(T data) {
		return HrRootEntity.ok(data);
	}
	
	public static <T> HrRootEntity<T> error(String errorMessage){
		return HrRootEntity.error(errorMessage);
	}
}
