package com.eehrs.back_end.db.repository;

import com.eehrs.back_end.db.entity.HealthCarePersonnel;
import com.eehrs.back_end.db.entity.TechnicalSupport;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface TechnicalSupportRepository extends CrudRepository<TechnicalSupport,Long> {

    Optional<TechnicalSupport>findByAnswer(String value);
    Optional<TechnicalSupport>findAllByAnswer(String Value);
    List<TechnicalSupport>findByFromUserAndAnswered(HealthCarePersonnel healthCarePersonnel,boolean status);
}
