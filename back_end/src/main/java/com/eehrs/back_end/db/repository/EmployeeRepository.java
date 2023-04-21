package com.eehrs.back_end.db.repository;

import org.springframework.data.repository.CrudRepository;

import com.eehrs.back_end.db.entity.Employee;

public interface EmployeeRepository extends CrudRepository<Employee,Long> {

}
