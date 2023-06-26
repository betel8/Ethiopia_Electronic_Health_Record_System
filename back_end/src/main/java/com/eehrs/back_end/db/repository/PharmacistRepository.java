package com.eehrs.back_end.db.repository;

import com.eehrs.back_end.db.entity.Doctor;
import org.springframework.data.repository.CrudRepository;

import com.eehrs.back_end.db.entity.Pharmacist;

public interface PharmacistRepository extends CrudRepository<Pharmacist, Long>  {
    Iterable<Pharmacist> findByEmailStartsWith(String email);
}
