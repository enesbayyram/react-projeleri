package com.enesbayram.hr.jwt;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.enesbayram.hr.entity.UserDef;
import com.enesbayram.hr.entity.UserRole;
import com.enesbayram.hr.service.IUserDefService;
import com.enesbayram.hr.service.IUserRoleService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class JwtService {

	@Value("${hr.secret-key}")
	private  String SECRET_KEY;
	
	@Value("${token.expiredIn}")
	private long expiredTime;
	
	private final IUserDefService userDefService;
	
	private final IUserRoleService userRoleService;
	
	public <T> T exportToken(String token , Function<Claims, T> claimsFunction) {
		final Claims claims = Jwts.parserBuilder().
				setSigningKey(getKey()).build().parseClaimsJws(token).getBody();
		return claimsFunction.apply(claims);
	}
	
	public String extractUsernameFromToken(String token) {
		return exportToken(token, Claims::getSubject);
	}
	
	public boolean tokenControl(String token , UserDetails userDetails) {
		String username = extractUsernameFromToken(token);
		return username.equals(userDetails.getUsername()) && new Date().before(exportToken(token, Claims::getExpiration));
	}

	public String generateToken(UserDetails user) {
		 Set<String> userRoles = new HashSet<>();
		 Map<String, Object> claims = new HashMap<>();
		 
		UserDef userDef = userDefService.findByUsername(user.getUsername());
		if(userDef!=null) {
			List<UserRole> userRoleList = userRoleService.findUserRolesByUserId(userDef.getId());
			if(userRoleList!=null && !userRoleList.isEmpty()) {
				for (UserRole userRole : userRoleList) {
					userRoles.add(userRole.getRoleDef().getRoleCode());
				}
				claims.put("roles", userRoles.toArray());
			}
		}
		return Jwts.builder()
				.setClaims(claims)
				.setSubject(user.getUsername())
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + expiredTime))
				.signWith(getKey(),SignatureAlgorithm.HS256)
				.compact();
	}
	
	public Key getKey() {
		byte[] key = Decoders.BASE64.decode(SECRET_KEY);
		return Keys.hmacShaKeyFor(key);
	}
	
}
