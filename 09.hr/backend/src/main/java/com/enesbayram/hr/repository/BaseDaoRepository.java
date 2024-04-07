package com.enesbayram.hr.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.enesbayram.hr.entity.BaseDbEntity;

@Repository
public interface BaseDaoRepository<T extends BaseDbEntity> extends CrudRepository<T, String>{

}
