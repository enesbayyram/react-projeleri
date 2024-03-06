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
@Table(name = "inventory_personel")
@NamedEntityGraph(name = "inventory_personel_graph_details" , attributeNodes = {
		@NamedAttributeNode(value = "inventory"),
		@NamedAttributeNode(value = "personel")
})
public class InventoryPersonel extends BaseDbEntity{
	
	private static final long serialVersionUID = 1L;
	
	@ManyToOne(fetch = FetchType.LAZY , optional = false)
	private Inventory inventory;
	
	@ManyToOne(fetch = FetchType.LAZY , optional = false)
	private Personel personel;
	
}
