package com.enesbayram.hr.entity;

import com.enesbayram.hr.enums.ContactSystemTypeEnum;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "communication")
public class Communication extends BaseDbEntity{
	
	private static final long serialVersionUID = 1L;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "contact_system_type")
	private ContactSystemTypeEnum contactSystem;
	
	@Column(name = "contact_value")
	private String contactValue;
	
	@Column(name = "is_active")
	private Boolean isActive;
	
}
