package com.eehrs.back_end.db;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Long> {
// fetch user name
	List<User>findByfName(String fName);
	Optional<User> findByEmail(String email);
	@Query("select email from User where email = ?1")
	String findByEmailRetrunEmail(String email);
	@Query("select id from User where email= ?1")
	Long findByEmailReturnId(String email);
}
