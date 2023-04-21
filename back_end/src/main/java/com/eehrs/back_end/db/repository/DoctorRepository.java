package com.eehrs.back_end.db.repository;

import org.springframework.data.repository.CrudRepository;

import com.eehrs.back_end.db.entity.Doctor;

public interface DoctorRepository extends CrudRepository<Doctor,Long> {

}
