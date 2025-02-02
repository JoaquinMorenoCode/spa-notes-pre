
# Start backend Spring Boot application
echo "starting backend"
cd backend/
mvn spring-boot:run &

# Start frontend React application
echo "starting frontend"
cd ../frontend/
npm install
npm start
