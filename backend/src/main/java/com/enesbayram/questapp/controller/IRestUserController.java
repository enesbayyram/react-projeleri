package com.enesbayram.questapp.controller;

import java.util.List;

import com.enesbayram.questapp.dto.DtoUser;
import com.enesbayram.questapp.dto.DtoUserUI;
import com.enesbayram.questapp.entities.RestRootEntity;
import com.enesbayram.questapp.entities.User;

public interface IRestUserController {

	RestRootEntity<List<DtoUser>> getUsers();
	
	RestRootEntity<User> findUserById(Long userId);
	
	RestRootEntity<User> saveUser(DtoUserUI user);
	
	RestRootEntity<User> updateUser(Long userId , DtoUserUI newUser);
	
	RestRootEntity<String> deleteUser(Long userId);
	
}
