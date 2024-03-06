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
@Table(name = "user_role")
@NamedEntityGraph(name = "user_role_graph_details", attributeNodes = { @NamedAttributeNode(value = "userDef"),
		@NamedAttributeNode(value = "roleDef") })
public class UserRole extends BaseDbEntity {

	private static final long serialVersionUID = 1L;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	private UserDef userDef;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	private RoleDef roleDef;
}
