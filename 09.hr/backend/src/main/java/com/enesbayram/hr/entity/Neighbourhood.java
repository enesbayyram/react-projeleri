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
@Table(name = "neighbourhood")
public class Neighbourhood extends BaseDbEntity {

	private static final long serialVersionUID = 1L;

	@Column(name = "neighbourhood_code", nullable = false)
	private String neighbourhoodCode;

	@Column(name = "neighbourhood_name", nullable = false)
	private String neighbourhoodName;

}
