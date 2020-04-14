##Recipe-app-service

##Database setup
You will need Docker in order to install a containerized MySQL dev environment. 
After getting Docker, run the following command anywhere:

````shell script
docker run \
-p 0.0.0.0:7999:3306 \
--name gsd-db \
-e MYSQL_ROOT_PASSWORD=password \
-e MYSQL_USER=gsd-dev \
-e MYSQL_PASSWORD=password \
-e MYSQL_DATABASE=gsd \
-d mysql:8.0.19
````

This will create a Docker instance called `gsd-db`, running a 
MySQL v8.0.19, with the root password being `password`. It also creates a 
database called `gsd`, creates a user called `gsd-dev` (with password `password`),
and assigns that user full permissions onto the `gsd` database.

##Sequelize 

migration naming convention: 
<yearmonthdayhourminutesecond>-create-<migration_name>.js
eg. 20200413062730-create-chefs.js

Migration concept of up and down:

up - It usually means we are upgrading the db system and taking it from one migration to the next,
and it is now increasing in complexity. 

down - Usually means we are getting rid of a migration. This kind be quite dangerous,
removing a migration (row, column) will mean deleting data that usually cannot be recovered.
