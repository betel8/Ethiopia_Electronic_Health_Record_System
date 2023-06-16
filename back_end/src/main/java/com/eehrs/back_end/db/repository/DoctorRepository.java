package com.eehrs.back_end.db.repository;

import com.eehrs.back_end.db.entity.Admin;
import org.springframework.data.repository.CrudRepository;

import com.eehrs.back_end.db.entity.Doctor;

public interface DoctorRepository extends CrudRepository<Doctor,Long> {
    Iterable<Doctor> findByEmailStartsWith(String email);

}
