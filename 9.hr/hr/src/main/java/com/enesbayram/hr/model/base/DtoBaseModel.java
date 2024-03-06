package com.enesbayram.hr.model.base;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonInclude(value = Include.NON_NULL)
public class DtoBaseModel implements Serializable{

	private static final long serialVersionUID = 1L;

	
}
