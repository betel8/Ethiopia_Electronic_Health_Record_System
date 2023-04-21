package com.eehrs.back_end.db.repository;

import org.springframework.data.repository.CrudRepository;

import com.eehrs.back_end.db.entity.Pharmacist;

public interface PharmacistRepository extends CrudRepository<Pharmacist, Long>  {

}
