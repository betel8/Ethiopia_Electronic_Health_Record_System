package com.eehrs.back_end.db.repository;

import com.eehrs.back_end.db.entity.Admin;
import org.springframework.data.repository.CrudRepository;

public interface AdminRepostitory extends CrudRepository<Admin,Long> {
}
