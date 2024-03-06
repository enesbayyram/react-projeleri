package com.enesbayram.hr.entity;

import java.util.Date;

import jakarta.persistence.Column;
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
@Table(name = "permission_personel")
@NamedEntityGraph(name = "permission_personel_graph_details" , attributeNodes = {
		@NamedAttributeNode(value = "personel"),
		@NamedAttributeNode(value = "permissionTypeDef")
})
public class PermissionPersonel extends BaseDbEntity{
	
	private static final long serialVersionUID = 1L;

	@ManyToOne(fetch = FetchType.LAZY , optional = false)
	private Personel personel;
	
	@Column(name = "permission_time")
	private Double permissionTime;
	
	@Column(name = "start_date")
	private Date startDate;
	
	@Column(name = "end_date")
	private Date endDate;

	@ManyToOne(fetch = FetchType.LAZY , optional = false)
	private PermissionTypeDef permissionTypeDef;
}
