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
@Table(name = "district")
public class District extends BaseDbEntity{
	
	private static final long serialVersionUID = 1L;

	@Column(name = "district_code" , nullable = false)
	private String districtCode;
	
	@Column(name = "district_name")
	private String districtName;
}
