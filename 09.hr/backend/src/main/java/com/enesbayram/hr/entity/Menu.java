package com.enesbayram.hr.entity;

import com.enesbayram.hr.enums.MenuType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.ManyToOne;
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
@Table(name = "menu")
@NamedEntityGraph(name = "menu_details" , attributeNodes = {
		@NamedAttributeNode(value = "parentMenu"),
})
public class Menu extends BaseDbEntity {

	private static final long serialVersionUID = 1L;

	@Column(name = "icon", nullable = true)
	private String icon;

	@Column(name = "menu_link", nullable = false)
	private String menuLink;

	@Column(name = "menu_text")
	private String menuText;

	@Enumerated(EnumType.STRING)
	@Column(name = "menu_type")
	private MenuType menuType;

	@Column(name = "is_active")
	private Boolean isActive;
	
	@ManyToOne
	private Menu parentMenu;

}
