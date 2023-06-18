package com.eehrs.back_end.db.repository;


import com.eehrs.back_end.db.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.eehrs.back_end.db.entity.ActivityLog;

import java.util.List;

public interface ActivityLogRepository extends CrudRepository<ActivityLog,Long> {
    List<ActivityLog> findByUser(User user);
    ActivityLog findFirstByUserOrderByActivityTimeDesc(User user);

}
