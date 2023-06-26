package com.eehrs.back_end.db.repository;

import com.eehrs.back_end.db.entity.Prescription;
import org.springframework.data.repository.CrudRepository;

public interface PrescriptionRepository extends CrudRepository<Prescription,Long> {

}
