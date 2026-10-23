package com.agroflow.agroflow_backend.department.repository;

import com.agroflow.agroflow_backend.department.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
    boolean existsByCode(String code);

    Optional<Department> findByCode(String code);
}
