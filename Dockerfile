# Utilizando a ultima versão do node, caso deseja utilizar uma em específico, coloque o número da versão no final.
FROM node:latest

# Cria o diretório do aplicativo
WORKDIR /usr/src/app

# Instala as dependências do aplicativo
# Copia os arquivos: package.json E package-lock.json
COPY package*.json ./

RUN npm install
# Se você esta buildando seu código para produção
# RUN npm ci --only=production

# Copia a pasta raiz para o docker.
COPY . .

EXPOSE 3001
CMD [ "npm", "start" ]