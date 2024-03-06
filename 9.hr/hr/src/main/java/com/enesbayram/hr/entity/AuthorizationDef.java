package com.enesbayram.hr.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
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
@Table(name = "authorization_def")
public class AuthorizationDef extends BaseDbEntity{
	
	private static final long serialVersionUID = 1L;

	@Column(name = "description")
	private String description;
	
	@Column(name = "short_code" , nullable = false)
	private String shortCode;
	
	@ManyToOne(fetch = FetchType.LAZY , optional = false)
	private Menu menu;
	
	@Column(name = "is_active")
	private Boolean isActive;
}
