package com.enesbayram.hr.entity;

import com.enesbayram.hr.enums.PermissionTypeEnum;

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
@Table(name = "permission_type_def")
public class PermissionTypeDef extends BaseDbEntity{

	private static final long serialVersionUID = 1L;

	@Enumerated(EnumType.STRING)
	@Column(name = "short_code" , nullable = false)
	private PermissionTypeEnum shortCode;
	
	@Column(name = "description")
	private String desription;
}
