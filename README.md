# Getting Started with the Server side of the Node Docker todo app

## Prerequisites
Ensure that you have Docker installed 
visit docker official documentation to install

- check that docker is installed
```sh
docker --version
```


- you might want to install mongo-db first by running the shell script. 
you can achieve this by running the `mongo-db.sh` file, ensure to update the credentials in the file before proceeding.
```sh
sudo chmod 777 mongo-db.sh
```

```sh
./mongo-db.sh
```
this will install mongodb and run the database as a container, 

- ensure to setup the `.env` file
```sh
cp .env.example .env
```
edit the connection string to match the credentials on the `mongo-db.sh` file

- build image using the Dockerfile
```sh
docker build -t backend-node .
```

- rum the built image using CLI
```sh
docker run --name backend-node -d -p 5000:5000 backend-node
```
