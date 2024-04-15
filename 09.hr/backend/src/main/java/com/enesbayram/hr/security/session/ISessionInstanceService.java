package com.enesbayram.hr.security.session;

import com.enesbayram.hr.entity.UserDef;

public interface ISessionInstanceService {
	
	public UserDef getUserInformation();

	public void setUserInformation(UserDef userDef);
	
	public String getUsername();
}
