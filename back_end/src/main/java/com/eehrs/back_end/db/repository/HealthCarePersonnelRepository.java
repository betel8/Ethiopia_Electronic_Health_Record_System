package com.eehrs.back_end.db.repository;

import com.eehrs.back_end.db.entity.HCP;
import com.eehrs.back_end.db.entity.HealthCarePersonnel;
import com.eehrs.back_end.db.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface HealthCarePersonnelRepository extends CrudRepository<HealthCarePersonnel,Long> {
    Optional<HealthCarePersonnel> findByEmail(String email);

    Iterable<HealthCarePersonnel> findByWorks(HCP workPlace);
    Iterable<HealthCarePersonnel> findByWorksAndEmailStartsWith(HCP hcp,String email);

    Iterable<HealthCarePersonnel> findByEmailStartsWith(String email);
}
