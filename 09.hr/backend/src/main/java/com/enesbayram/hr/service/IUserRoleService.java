package com.enesbayram.hr.service;

import java.util.List;

import com.enesbayram.hr.entity.UserRole;

public interface IUserRoleService extends BaseDbService<UserRole>{

	List<UserRole> findUserRolesByUserId(String userId);

}
