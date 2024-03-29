package com.enesbayram.hr.controller.impl;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enesbayram.hr.controller.IRestPersonelController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class RestPersonelControllerImpl extends RestBaseController implements IRestPersonelController{

	@GetMapping("/hello")
	public String hello() {
		return "Haydi bakalım yürü be";
	}
}
