package com.eehrs.back_end.db.repository;

import com.eehrs.back_end.db.entity.PersonalDetail;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface PersonalDetailRepository extends CrudRepository<PersonalDetail,Long> {

    Optional<PersonalDetail> findPDById(Long aLong);


}
