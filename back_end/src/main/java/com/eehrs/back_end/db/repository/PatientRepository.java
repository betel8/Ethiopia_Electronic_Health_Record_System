package com.eehrs.back_end.db.repository;

import com.eehrs.back_end.db.entity.Patient;
import org.springframework.data.repository.CrudRepository;

public interface PatientRepository extends CrudRepository<Patient,Long> {
}
