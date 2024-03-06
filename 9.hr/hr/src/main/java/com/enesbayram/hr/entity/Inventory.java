package com.enesbayram.hr.entity;

import java.math.BigDecimal;

import com.enesbayram.hr.enums.InventoryStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "inventory")
public class Inventory extends BaseDbEntity{
	
	private static final long serialVersionUID = 1L;
	
	@Column(name = "short_code" , nullable = false)
	private String shortCode;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "price")
	private BigDecimal price;
	
	@Column(name = "serial_number")
	private String serialNumber;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "inventory_status")
	private InventoryStatus inventoryStatus;
	

}
