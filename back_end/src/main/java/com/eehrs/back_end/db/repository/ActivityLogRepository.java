package com.eehrs.back_end.db.repository;


import org.springframework.data.repository.CrudRepository;

import com.eehrs.back_end.db.entity.ActivityLog;

public interface ActivityLogRepository extends CrudRepository<ActivityLog,Long> {
	

}
