package com.enesbayram.questapp.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enesbayram.questapp.dto.DtoUser;
import com.enesbayram.questapp.dto.DtoUserUI;
import com.enesbayram.questapp.entities.User;
import com.enesbayram.questapp.repository.UserRepository;
import com.enesbayram.questapp.service.IUserService;

@Service
public class UserServiceImpl  implements IUserService {
	
	@Autowired
	private UserRepository userRepository ;

	@Override
	public List<DtoUser> getUsers() {
		List<User> users = userRepository.findAll();
		List<DtoUser> dtoList = new ArrayList<>();
		
		if(users!=null && !users.isEmpty()) {
			for (User user : users) {
				DtoUser dto = new DtoUser();
				dto.setId(user.getId());
				dto.setUsername(user.getUsername());
				dto.setPassword(user.getPassword());
				dtoList.add(dto);
			}
		}
		
		return dtoList;
	}

	@Override
	public User findUserById(Long userId) {
		 Optional<User> optional = userRepository.findById(userId);
		 if(optional.isPresent()) {
			 return optional.get();
		 }
		 //custom exception throws.
		 return null;
	}

	@Override
	public User saveUser(DtoUserUI dtoUser) {
		User user = new User();
		user.setUsername(dtoUser.getUsername());
		user.setPassword(dtoUser.getPassword());
		return userRepository.save(user);
	}

	@Override
	public User updateUser(Long userId, DtoUserUI newUser) {
		Optional<User> optional = userRepository.findById(userId);
		if(optional.isPresent()) {
			User dbUser = optional.get();
			dbUser.setUsername(newUser.getUsername());
			dbUser.setPassword(newUser.getPassword());
			dbUser.setAvatar(newUser.getAvatar());
			
			userRepository.save(dbUser);
			
			return dbUser;
		}
		 //custom exception throws.
		return null;
	}

	@Override
	public String deleteUser(Long userId) {
		userRepository.deleteById(userId);
		return "User deleted.";
	}

	@Override
	public User findByUsername(String username) {
		return userRepository.findByUsername(username).get();
	} 

	
}
