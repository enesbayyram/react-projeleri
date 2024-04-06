package com.enesbayram.questapp.service;

import java.util.List;
import java.util.Optional;

import com.enesbayram.questapp.dto.DtoUser;
import com.enesbayram.questapp.dto.DtoUserUI;
import com.enesbayram.questapp.entities.User;

public interface IUserService {

	List<DtoUser> getUsers();

	User findUserById(Long userId);

	User saveUser(DtoUserUI user);

	User updateUser(Long userId, DtoUserUI newUser);

	String deleteUser(Long userId);

	User findByUsername(String username);

}
