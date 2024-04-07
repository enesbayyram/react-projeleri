package com.enesbayram.hr.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "role_def")
public class RoleDef extends BaseDbEntity {

	private static final long serialVersionUID = 1L;

	@Column(name = "role_name", nullable = false)
	private String roleName;

	@Column(name = "role_code", nullable = false)
	private String roleCode;

	@Column(name = "description", nullable = true)
	private String description;

	@Column(name = "is_active", nullable = true)
	private Boolean isActive;

}
