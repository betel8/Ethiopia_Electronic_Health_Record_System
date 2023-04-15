package com.eehrs.back_end;

import java.util.ArrayList;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

@Component
public class AuthenticationManagerClass implements AuthenticationManager {

	

	   @Override
	    public Authentication authenticate(Authentication authentication) 
	      throws AuthenticationException {
	 
	        String name = authentication.getName();
	        String password = authentication.getCredentials().toString();
	 
	            // use the credentials
	            // and authenticate against the third-party system
	            return new UsernamePasswordAuthenticationToken(
	              name, password, new ArrayList<>());
	        
	    }

	  
}
