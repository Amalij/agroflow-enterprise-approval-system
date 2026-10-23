# AgroFlow Backend

This module contains the Spring Boot backend for the AgroFlow Enterprise Approval Management System.

## Prerequisites

- Java 21
- Maven 3.9+
- PostgreSQL 15+
- Optional: Docker Desktop for local PostgreSQL

## Local environment variables

Copy `.env.example` to a local `.env` file and adjust the values for your environment.

Example PowerShell:

```powershell
Copy-Item .env.example .env
$env:DB_URL = 'jdbc:postgresql://localhost:5432/agroflow_db'
$env:DB_USERNAME = 'agroflow_user'
$env:DB_PASSWORD = 'your_secure_password'
$env:SERVER_PORT = '8080'
$env:APP_CORS_ALLOWED_ORIGINS = 'http://localhost:4200,http://127.0.0.1:4200'
```

Do not commit real credentials. Keep password values in your local environment or a local `.env` file that is ignored by Git.

## PostgreSQL setup

Create a PostgreSQL database named `agroflow_db` and a user with access to it.

Example SQL:

```sql
CREATE DATABASE agroflow_db;
CREATE USER agroflow_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE agroflow_db TO agroflow_user;
```

## Run the backend

From the backend directory:

```powershell
./mvnw.cmd clean test
./mvnw.cmd spring-boot:run
```

The application will listen on port 8080 by default unless `SERVER_PORT` is changed.

## Health check

```powershell
Invoke-WebRequest http://localhost:8080/api/health
```

## Department API

Authenticated endpoints use Spring Security. The health endpoint is public. Other endpoints require authentication.

### Endpoints

- `GET /api/health` — public health status
- `GET /api/departments` — list departments
- `GET /api/departments/{id}` — get a department by id
- `POST /api/departments` — create department (`ADMIN` role required)
- `PUT /api/departments/{id}` — update department (`ADMIN` role required)
- `DELETE /api/departments/{id}` — delete department (`ADMIN` role required)

## Testing

```powershell
./mvnw.cmd test
```

The application tests use an in-memory H2 profile so the backend can be validated without requiring a local PostgreSQL instance.

## Notes

This phase focuses on the backend foundation and the Department module. The other enterprise modules are planned for future phases and are not yet implemented.
