package com.eehrs.back_end;


import java.util.Arrays;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.security.oauth2.server.resource.web.BearerTokenAuthenticationEntryPoint;
import org.springframework.security.oauth2.server.resource.web.access.BearerTokenAccessDeniedHandler;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.header.writers.XXssProtectionHeaderWriter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.eehrs.back_end.service.UserDetailsServiceImpl;
import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
public class SystemConfig  {
	public final RsaKeyProperties rsaKeys; 
	@Autowired
	private UserDetailsServiceImpl userDetailsService;
	
	public SystemConfig(RsaKeyProperties rsaKeys) {
		this.rsaKeys=rsaKeys;
	}

	@Bean
	public PasswordEncoder 	passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public SecurityFilterChain configure(HttpSecurity http) throws Exception {
		return http.csrf(csrf-> {try {
			csrf.disable().cors().configurationSource(corsConfigurationSource());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}})
				.sessionManagement(SM->
				SM.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.authorizeHttpRequests(AHR->{
					AHR.requestMatchers(HttpMethod.POST,"/forgetPassword").permitAll()
							.requestMatchers(HttpMethod.POST, "/login").permitAll()
							.anyRequest().authenticated();})
				.userDetailsService(userDetailsService)
				.oauth2ResourceServer(OAuth2ResourceServerConfigurer::jwt)
				.exceptionHandling(ex->{
					ex.authenticationEntryPoint(new BearerTokenAuthenticationEntryPoint())
					.accessDeniedHandler(new BearerTokenAccessDeniedHandler());
				})
				.headers(header->header.xssProtection(xss->xss.headerValue(XXssProtectionHeaderWriter.HeaderValue.ENABLED_MODE_BLOCK)))
				.build();
	}

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowedOrigins(Arrays.asList("*"));
		config.setAllowedMethods(Arrays.asList("*"));
		config.setAllowedHeaders(Arrays.asList("*"));
		config.setAllowCredentials(false);
		config.applyPermitDefaultValues();
		source.registerCorsConfiguration("/**", config);
		return source;
	}
	@Bean
	public AuthenticationManager authenticationManager(UserDetailsService user) {
		var authProvider=new DaoAuthenticationProvider();
		authProvider.setUserDetailsService(user);
		authProvider.setPasswordEncoder(passwordEncoder());
		return new ProviderManager(authProvider);
	}
 
	@Bean
	public JavaMailSender getJavaMailSender() {
	    JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
	    mailSender.setHost("smtp.gmail.com");
	    mailSender.setPort(587);
	    
	    mailSender.setUsername("moheehrs@gmail.com");
	    mailSender.setPassword("xqeymbnjvbrfltzz");
	    
	    Properties props = mailSender.getJavaMailProperties();
	    props.put("mail.transport.protocol", "smtp");
	    props.put("mail.smtp.auth", "true");
	    props.put("mail.smtp.starttls.enable", "true");
	    props.put("mail.debug", "true");
	    
	    return mailSender;
	}
	
	@Bean
	 public JwtDecoder jwtDecoder() {
		return NimbusJwtDecoder.withPublicKey(rsaKeys.publicKey()).build();
	}
	@Bean
	public JwtEncoder jwtEncoder() {
		JWK jwk=new RSAKey.Builder(rsaKeys.publicKey()).privateKey(rsaKeys.privateKey()).build();
		JWKSource<SecurityContext>jwks=new ImmutableJWKSet<>(new JWKSet(jwk));
		return new NimbusJwtEncoder(jwks);
	}

	
}
