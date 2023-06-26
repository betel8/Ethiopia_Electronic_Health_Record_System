package com.eehrs.back_end.db.repository;

import com.eehrs.back_end.db.entity.AcademicDetail;
import com.eehrs.back_end.db.entity.Speciality;
import org.springframework.data.repository.CrudRepository;

public interface SpecialityRepository extends CrudRepository<Speciality,Long> {
    Iterable<Speciality>findByAcademicDetail(AcademicDetail academicDetail);
}
