package com.enesbayram.hr.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.NamedAttributeNode;
import jakarta.persistence.NamedEntityGraph;
import jakarta.persistence.OneToOne;
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
@Table(name = "resfresh_token")
@NamedEntityGraph(name = "refresh_graph_details", attributeNodes = {
		@NamedAttributeNode(value = "userDef")
})
public class RefreshToken extends BaseDbEntity{

	private String refreshToken;
	
	private Date expireDate;
	
	@OneToOne
	private UserDef userDef;

}
