package com.eehrs.back_end.db.repository;

import com.eehrs.back_end.db.entity.Doctor;
import com.eehrs.back_end.db.entity.HCP;
import org.springframework.data.repository.CrudRepository;

public interface HCPRepository extends CrudRepository<HCP,Long> {
    Iterable<HCP> findByCompanyNameStartsWith(String name);
    HCP findByOwner(String ownerEmail);
}
