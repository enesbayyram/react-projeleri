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
@Table(name = "department")
public class Department  extends BaseDbEntity{
	
	private static final long serialVersionUID = 1L;

	@Column(name = "short_code" , nullable = false)
	private String shortCode;
	
	@Column(name = "description")
	private String description;
	
}
