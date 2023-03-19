package com.eehrs.back_end.db;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Long> {
// fetch user name
	List<User>findByfName(String fName);
	Optional<User> findByUsername(String username);
}
