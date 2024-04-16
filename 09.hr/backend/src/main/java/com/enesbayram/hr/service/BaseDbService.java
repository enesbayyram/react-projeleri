package com.enesbayram.hr.service;

import java.util.List;
import java.util.Optional;

import com.enesbayram.hr.dto.base.DtoBaseModel;
import com.enesbayram.hr.dto.base.DtoCrudModel;
import com.enesbayram.hr.entity.BaseDbEntity;

public interface BaseDbService<T extends BaseDbEntity> {

	T save(T t);

	T update(T t);

	void delete(T t);

	Optional<T> findById(String id);

	Iterable<T> findAll();
	

	<D extends DtoBaseModel> D toDTO(T dbEntity, Class<?> clazz);
	
	<D extends DtoBaseModel> D toDTO(T dbEntity);
//
	<D extends DtoBaseModel> List<D> toDTOList(List<T> list);
//	
	<D extends DtoCrudModel> T toDTOForInsert(D dtoEntity , Class<T> clazz);
}
