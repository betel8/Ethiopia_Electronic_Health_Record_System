package com.eehrs.back_end.db.repository;

import com.eehrs.back_end.db.entity.Diagnosis;
import org.springframework.data.repository.CrudRepository;

public interface DiagnosisRepository extends CrudRepository<Diagnosis,Long> {
}
