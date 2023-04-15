package com.eehrs.back_end.db;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface ActivityLogRepository extends CrudRepository<ActivityLog,Long> {

	Optional<User> findByUser(int user);

}
