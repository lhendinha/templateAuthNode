# API em Node com autenticação e Docker.

API de autenticação em Node.JS com Docker.

Disponível também em Docker, por favor dê uma olhada: https://hub.docker.com/r/lhendinha/nodemongodbdocker

Como fazer:

  #Opção 1:
  docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no tutum/mongodb

  Pegar o id do container e renomear para: mymongodb, com o comando:

  docker rename mymongodb

  docker build -t .

  docker run -p : --link mymongodb:mymongodb

  #Opção 2:
  docker-compose build
  
  docker-compose up
