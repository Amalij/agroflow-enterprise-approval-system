package com.agroflow.agroflow_backend.department.service;

import com.agroflow.agroflow_backend.department.dto.DepartmentRequest;
import com.agroflow.agroflow_backend.department.dto.DepartmentResponse;

import java.util.List;

public interface DepartmentService {
    List<DepartmentResponse> findAll();

    DepartmentResponse findById(Long id);

    DepartmentResponse create(DepartmentRequest request);

    DepartmentResponse update(Long id, DepartmentRequest request);

    void delete(Long id);
}
