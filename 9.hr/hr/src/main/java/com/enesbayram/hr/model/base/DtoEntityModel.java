package com.enesbayram.hr.model.base;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DtoEntityModel extends DtoBaseModel{

	private String id;

	private Date createTime;

	private Date updateTime;

	private String createUser;

	private String updateUser;
	
}
