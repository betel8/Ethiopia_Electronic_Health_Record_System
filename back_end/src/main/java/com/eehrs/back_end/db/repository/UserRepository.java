package com.eehrs.back_end.db.repository;

import java.util.Optional;

import com.eehrs.back_end.db.entity.Admin;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.eehrs.back_end.db.entity.User;

public interface UserRepository extends CrudRepository<User,Long> {
	
	
	Optional<User> findByEmail(String email);

	Iterable<User> findByEmailStartsWith(String email);
	@Query("select email from User where email = ?1")
	String findByEmailRetrunEmail(String email);
}
