package com.eehrs.back_end.db.repository;

import com.eehrs.back_end.db.entity.AcademicDetail;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface AcademicDetailRepository extends CrudRepository<AcademicDetail,Long> {

    Optional<AcademicDetail> findADById(Long aLong);
}
