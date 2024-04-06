package com.enesbayram.hr.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.NamedAttributeNode;
import jakarta.persistence.NamedEntityGraph;
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
@Table(name = "address")
@NamedEntityGraph(name = "address_graph_details" , attributeNodes = {
		@NamedAttributeNode(value = "city"),
		@NamedAttributeNode(value = "district"),
		@NamedAttributeNode(value = "neighbourhood")
})
public class Address extends BaseDbEntity{
	
	private static final long serialVersionUID = 1L;
	
	@ManyToOne(fetch = FetchType.LAZY , optional = false)
	private City city;
	
	@ManyToOne(fetch = FetchType.LAZY , optional = false)
	private District district;
	
	@ManyToOne(fetch = FetchType.LAZY , optional = false)
	private Neighbourhood neighbourhood;

}
