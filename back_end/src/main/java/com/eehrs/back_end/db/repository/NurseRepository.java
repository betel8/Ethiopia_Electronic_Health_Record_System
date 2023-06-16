package com.eehrs.back_end.db.repository;

import com.eehrs.back_end.db.entity.Doctor;
import org.springframework.data.repository.CrudRepository;

import com.eehrs.back_end.db.entity.Nurse;

public interface NurseRepository extends CrudRepository <Nurse,Long> {
    Iterable<Doctor> findByEmailStartsWith(String email);
}
