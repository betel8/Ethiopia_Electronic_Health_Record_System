package com.eehrs.back_end.db.repository;

import com.eehrs.back_end.db.entity.Admin;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AdminRepostitory extends CrudRepository<Admin,Long> {
   Iterable<Admin> findByEmailStartsWith(String email);
   List<Admin> findByEmail(String email);
}
