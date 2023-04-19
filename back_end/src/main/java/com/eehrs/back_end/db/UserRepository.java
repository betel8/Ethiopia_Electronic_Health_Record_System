package com.eehrs.back_end.db;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Long> {
	
	
	Optional<User> findByEmail(String email);
	Optional<User> findById(String id);
	
	@Query("select email from User where email = ?1")
	String findByEmailRetrunEmail(String email);
}
