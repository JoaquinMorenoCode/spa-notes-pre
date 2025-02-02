echo "starting setup..."

read -p "Enter MySQL username: " DB_USER
read -s -p "Enter MySQL password: " DB_PASS


cd backend/

CONFIG_FILE="src/main/resources/application.properties"

sed -i "4s/.*/spring.datasource.username=$DB_USER/" "$CONFIG_FILE"
sed -i "5s/.*/spring.datasource.password=$DB_PASS/" "$CONFIG_FILE"


# Build backend
mvn clean install
mvn spring-boot:run &

cd ../frontend/

# Build frontend 
npm install
npm start