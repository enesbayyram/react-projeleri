package com.enesbayram.questapp.controller.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enesbayram.questapp.controller.IRestUserController;
import com.enesbayram.questapp.dto.DtoUser;
import com.enesbayram.questapp.dto.DtoUserUI;
import com.enesbayram.questapp.entities.RestRootEntity;
import com.enesbayram.questapp.entities.User;
import com.enesbayram.questapp.service.IUserService;

@RestController
@RequestMapping("/users")
public class RestUserControllerImpl extends RestBaseController implements IRestUserController{
	
	@Autowired
	private IUserService userService;

	@GetMapping
	@Override
	public RestRootEntity<List<DtoUser>> getUsers() {
		return ok(userService.getUsers());
	}

	@GetMapping("/{userId}")
	@Override
	public RestRootEntity<User> findUserById(@PathVariable Long userId) {
		return ok(userService.findUserById(userId));
	}

	@PostMapping
	@Override
	public RestRootEntity<User> saveUser(@RequestBody DtoUserUI dtoUser) {
		return ok(userService.saveUser(dtoUser));
	}

	@PutMapping("/{userId}")
	@Override
	public RestRootEntity<User> updateUser(@PathVariable Long userId, @RequestBody DtoUserUI newUser) {
		return ok(userService.updateUser(userId, newUser));
	}

	@DeleteMapping("/{userId}")
	@Override
	public RestRootEntity<String> deleteUser(@PathVariable Long userId) {
		return ok(userService.deleteUser(userId));
	}
}
