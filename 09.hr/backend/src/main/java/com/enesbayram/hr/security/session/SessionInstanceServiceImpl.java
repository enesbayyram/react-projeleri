package com.enesbayram.hr.security.session;

import org.springframework.stereotype.Service;

import com.enesbayram.hr.entity.UserDef;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
@Data
public class SessionInstanceServiceImpl implements ISessionInstanceService{

	private UserDef userDef;

	@Override
	public UserDef getUserInformation() {
		return this.userDef;
	}

	@Override
	public void setUserInformation(UserDef userDef) {
		this.userDef = userDef;
	}

	@Override
	public String getUsername() {
		if(userDef!=null) {
			return userDef.getUsername();
		}
		return null;
	}
}
