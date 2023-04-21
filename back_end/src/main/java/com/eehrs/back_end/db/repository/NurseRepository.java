package com.eehrs.back_end.db.repository;

import org.springframework.data.repository.CrudRepository;

import com.eehrs.back_end.db.entity.Nurse;

public interface NurseRepository extends CrudRepository <Nurse,Long> {

}
