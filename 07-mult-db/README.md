sudo docker run --name postgres -e POSTGRES_USER=rafaelnasc -e POSTGRES_PASSWORD=minhasenhasecreta -e POSTGRES_DB=heroes -p 5432:5432 -d postgres 

docker ps