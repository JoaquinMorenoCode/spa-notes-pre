# Notes App

## Backend

### Requirements

- Java Development Kit (JDK): v17
- Apache Maven: v3.8.6
- MySQL: v8.0

### Dependencies

- Spring Boot Starter Data JPA
- Spring Boot Starter Web
- MySQL Connector
- Lombok
- Spring Boot Starter Validation

### Setup

1. Install JDK 17.
2. Install Apache Maven.
3. Install MySQL 8.0.
4. Configure your MySQL server (username/password)
5. Navigate to the backend directory.
6. Ensure MySQL is running and update application.properties with your credentials. The database will be automatically created when the backend starts
7. Run `mvn clean install` to build the project.
8. Run `mvn spring-boot:run` to start the backend server.


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

1. Install Node.js and npm.
2. Navigate to the frontend directory 'cd frontend'.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the development server ('http://localhost:3000/').

