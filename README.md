# Notes App

## Backend

### Requirements

- Java Development Kit (JDK): v17
- Apache Maven: v3.8.8
- MySQL: v8.0
- XAMPP (for managing Apache and MySQL services)

### Dependencies

- Spring Boot Starter Data JPA
- Spring Boot Starter Web
- MySQL Connector
- Lombok
- Spring Boot Starter Validation
 
## Frontend

### Requirements

- Node.js: v18.15.0
- npm: v9.5.0

### Dependencies

- axios: ^1.7.2
- bootstrap: ^5.3.3
- bootstrap-icons: ^1.11.3
- react: ^18.3.1
- react-bootstrap-icons: ^1.11.4
- react-dom: ^18.3.1
- react-router-dom: ^6.23.1

### Setup

1. Install JDK 17 on your system.
2. Install Apache Maven version 3.8+.
3. Install MySQL 8.0 on your system.
4. Install XAMPP.
5. Open XAMPP Control Panel and start the Apache and MySQL services.
6. Configure your MySQL server (username/password).
7. Open Git Bash or your terminal, and navigate to the project folder.
8. Ensure MySQL is running, then execute the `startproject.sh` bash script.
    This script will automatically:
       - Set up the database connection (database will be created automatically when the backend starts)
       - Build the project
       - Start the backend/frontend application  