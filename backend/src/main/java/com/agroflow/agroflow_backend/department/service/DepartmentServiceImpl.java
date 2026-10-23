package com.agroflow.agroflow_backend.department.service;

import com.agroflow.agroflow_backend.common.exceptions.DuplicateResourceException;
import com.agroflow.agroflow_backend.common.exceptions.ResourceNotFoundException;
import com.agroflow.agroflow_backend.department.dto.DepartmentRequest;
import com.agroflow.agroflow_backend.department.dto.DepartmentResponse;
import com.agroflow.agroflow_backend.department.entity.Department;
import com.agroflow.agroflow_backend.department.repository.DepartmentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DepartmentServiceImpl implements DepartmentService {

    private final DepartmentRepository departmentRepository;

    public DepartmentServiceImpl(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<DepartmentResponse> findAll() {
        return departmentRepository.findAll().stream()
                .map(this::toResponse)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public DepartmentResponse findById(Long id) {
        Department department = departmentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + id));
        return toResponse(department);
    }

    @Override
    @Transactional
    public DepartmentResponse create(DepartmentRequest request) {
        if (departmentRepository.existsByCode(normalizeCode(request.getCode()))) {
            throw new DuplicateResourceException("Department code already exists: " + request.getCode());
        }

        Department department = new Department();
        department.setName(request.getName().trim());
        department.setCode(normalizeCode(request.getCode()));
        department.setDescription(request.getDescription() == null ? null : request.getDescription().trim());
        department.setActive(request.isActive());

        Department saved = departmentRepository.save(department);
        return toResponse(saved);
    }

    @Override
    @Transactional
    public DepartmentResponse update(Long id, DepartmentRequest request) {
        Department department = departmentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + id));

        String normalizedCode = normalizeCode(request.getCode());
        if (!normalizedCode.equalsIgnoreCase(department.getCode()) && departmentRepository.existsByCode(normalizedCode)) {
            throw new DuplicateResourceException("Department code already exists: " + normalizedCode);
        }

        department.setName(request.getName().trim());
        department.setCode(normalizedCode);
        department.setDescription(request.getDescription() == null ? null : request.getDescription().trim());
        department.setActive(request.isActive());

        return toResponse(departmentRepository.save(department));
    }

    @Override
    @Transactional
    public void delete(Long id) {
        Department department = departmentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + id));
        departmentRepository.delete(department);
    }

    private DepartmentResponse toResponse(Department department) {
        return new DepartmentResponse(
                department.getId(),
                department.getName(),
                department.getCode(),
                department.getDescription(),
                department.isActive(),
                department.getCreatedAt(),
                department.getUpdatedAt()
        );
    }

    private String normalizeCode(String code) {
        if (code == null) {
            return null;
        }
        return code.trim();
    }
}
