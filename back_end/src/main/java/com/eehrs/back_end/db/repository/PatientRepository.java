package com.eehrs.back_end.db.repository;

import com.eehrs.back_end.db.entity.Patient;
import org.springframework.data.repository.CrudRepository;

public interface PatientRepository extends CrudRepository<Patient,Long> {
    Iterable<Patient> findByfNameAndMnameStartsWith(String fName,String mName);
    Iterable<Patient> findByfNameStartsWith(String fName);

    Iterable<Patient> findByfNameAndMnameAndLnameStartsWith(String fname,String mname,String lname);
}
