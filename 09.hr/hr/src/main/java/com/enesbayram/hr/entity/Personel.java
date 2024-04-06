package com.enesbayram.hr.entity;

import java.util.Date;

import com.enesbayram.hr.enums.GenderType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "personel")
public class Personel extends BaseDbEntity{
	
	private static final long serialVersionUID = 1L;
	
	@Column(name = "tckn" , length = 11 , nullable = false)
	private String tckn;
	
	@Column(name = "image")
	private String image;
	
	@Column(name = "academic_title")
	private String academicTitle;

	@Column(name = "firstname")
	private String firstName;
	
	@Column(name = "lastname")
	private String lastName;
	
	@Column(name = "birth_of_date")
	private Date birthOfDate;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "gender")
	private GenderType gender;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "start_date")
	private Date startDate;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "exit_date")
	private Date exitDate;
	
	@OneToOne(fetch = FetchType.LAZY , optional = false)
	private Department department;
	
	@ManyToOne(fetch = FetchType.LAZY , optional = false)
	private Address address;
	
	@ManyToOne(fetch = FetchType.LAZY , optional = false)
	private Communication communication;
	
	
	
}
