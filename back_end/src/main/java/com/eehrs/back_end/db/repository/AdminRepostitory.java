package com.eehrs.back_end.db.repository;

import com.eehrs.back_end.db.entity.Admin;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface AdminRepostitory extends CrudRepository<Admin,Long> {
   Iterable<Admin> findByEmailStartsWith(String email);


   Optional<Admin> findByEmail(String Email);


}
