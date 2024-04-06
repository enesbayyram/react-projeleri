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
@Table(name = "city")
public class City extends BaseDbEntity{
	
	private static final long serialVersionUID = 1L;

	@Column(name = "city_code" , nullable = false)
	private String cityCode;
	
	@Column(name = "city_name")
	private String cityName;
}
