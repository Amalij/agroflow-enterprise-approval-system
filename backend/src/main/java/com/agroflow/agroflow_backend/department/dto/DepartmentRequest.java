package com.agroflow.agroflow_backend.department.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class DepartmentRequest {

    @NotBlank(message = "Department name is required")
    @Size(max = 100, message = "Department name must be under 100 characters")
    private String name;

    @NotBlank(message = "Department code is required")
    @Pattern(regexp = "^[A-Za-z0-9_-]+$", message = "Department code may only contain letters, numbers, underscores, and dashes")
    @Size(max = 50, message = "Department code must be under 50 characters")
    private String code;

    @Size(max = 500, message = "Description must be under 500 characters")
    private String description;

    private boolean active = true;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
