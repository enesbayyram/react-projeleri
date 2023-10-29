package com.enesbayram.questapp.controller.impl;

import com.enesbayram.questapp.entities.RestRootEntity;

public class RestBaseController{
	
	
	public <T> RestRootEntity<T> ok(T data) {
		return RestRootEntity.ok(data);
	}
	
	public <T> RestRootEntity<T> error(String errorMessage){
		return RestRootEntity.error(errorMessage);
	}

}
