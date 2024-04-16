package com.enesbayram.hr.service;

import com.enesbayram.hr.entity.UserDef;

public interface IUserDefService extends BaseDbService<UserDef>{

	UserDef findByUsername(String username);
}
