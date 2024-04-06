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
@Table(name = "role_authorization")
@NamedEntityGraph(name = "role_authorization_graph_details", attributeNodes = { @NamedAttributeNode(value = "roleDef"),
		@NamedAttributeNode(value = "authorizationDef")})
public class RoleAuthorization extends BaseDbEntity {

	private static final long serialVersionUID = 1L;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	private RoleDef roleDef;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	private AuthorizationDef authorizationDef;

}
