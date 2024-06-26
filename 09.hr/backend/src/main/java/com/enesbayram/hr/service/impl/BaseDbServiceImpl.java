package com.enesbayram.hr.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.enesbayram.hr.dto.DtoUserDef;
import com.enesbayram.hr.dto.base.DtoBaseModel;
import com.enesbayram.hr.dto.base.DtoCrudModel;
import com.enesbayram.hr.entity.BaseDbEntity;
import com.enesbayram.hr.exception.HRBaseException;
import com.enesbayram.hr.exception.HRMessageFactory;
import com.enesbayram.hr.exception.HRMessageType;
import com.enesbayram.hr.exception.HrMessage;
import com.enesbayram.hr.repository.BaseDaoRepository;
import com.enesbayram.hr.security.session.ISessionInstanceService;
import com.enesbayram.hr.service.BaseDbService;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Transactional(propagation = Propagation.REQUIRED)
@Slf4j
public abstract class BaseDbServiceImpl<R extends BaseDaoRepository<T>, T extends BaseDbEntity>
		implements BaseDbService<T> {

	@Autowired
	protected R dao;
	
	@Autowired
	private ISessionInstanceService sessionInstanceService;

	@PersistenceContext
	private EntityManager entityManager;

	public abstract Class<?> getDTOClassForService();

	@SuppressWarnings("unchecked")
	@Override
	public T save(T t) {
		BaseDbEntity baseDb = (BaseDbEntity) t;
		baseDb.setCreateTime(new Date());
		baseDb.setCreateUser(sessionInstanceService.getUsername());

		t = (T) baseDb;
		T entity = dao.save(t);
		return entity;
	}

	@Override
	public T update(T t) {
		BaseDbEntity baseDb = (BaseDbEntity)t;
		baseDb.setUpdateTime(new Date());
		baseDb.setUpdateUser(sessionInstanceService.getUsername());
		T entity = entityManager.merge(t);
		return entity;
	}

	@Override
	public void delete(T t) {
		dao.delete(t);
	}

	@Override
	public Optional<T> findById(String id) {
		Optional<T> optional = dao.findById(id);
		return optional;
	}

	@Override
	public Iterable<T> findAll() {
		Iterable<T> iterable = dao.findAll();
		return iterable;
	}

	@SuppressWarnings("unchecked")
	@Override
	public <D extends DtoBaseModel> D toDTO(T dbEntity, Class<?> clazz) {
		D dtoClass = null;
		try {
			dtoClass = (D) clazz.getDeclaredConstructor().newInstance();
			BeanUtils.copyProperties(dbEntity, dtoClass);
		} catch (Exception e) {
			throw new HRBaseException(
					new HrMessage(HRMessageType.UNEXPECTED_ERROR_9999, HRMessageFactory.ofStatic(e.getMessage())));
		}
		return dtoClass;
	}

	@Override
	public <D extends DtoBaseModel> D toDTO(T dbEntity) {
		return toDTO(dbEntity, getDTOClassForService());
	}

	@Override
	public <D extends DtoBaseModel> List<D> toDTOList(List<T> list) {
		List<D> dtoList = new ArrayList<>();
		for (T t : list) {
			dtoList.add(toDTO(t));
		}
		return dtoList;
	}

	@Override
	public <D extends DtoCrudModel> T toDTOForInsert(D dtoEntity, Class<T> clazz) {
		T dbEntity = null;
		try {
			dbEntity = clazz.getDeclaredConstructor().newInstance();
			BeanUtils.copyProperties(dtoEntity, dbEntity);
		} catch (Exception e) {
			throw new HRBaseException(
					new HrMessage(HRMessageType.UNEXPECTED_ERROR_9999, HRMessageFactory.ofStatic(e.getMessage())));
		}
		return dbEntity;
	}

}
