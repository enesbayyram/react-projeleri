package com.enesbayram.hr.service.impl;

import org.springframework.stereotype.Service;

import com.enesbayram.hr.entity.Personel;
import com.enesbayram.hr.repository.PersonelRepository;
import com.enesbayram.hr.service.IPersonelService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class PersonelServiceImpl extends BaseDbServiceImpl<PersonelRepository, Personel> implements IPersonelService{
	
	
	@Override
	public Class<?> getDTOClassForService() {
		return null;
	}

}
