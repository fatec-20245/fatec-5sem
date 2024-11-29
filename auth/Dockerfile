# Use uma imagem base oficial do Node.js
FROM node:16

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie apenas os arquivos necessários para instalar dependências
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código do projeto para o contêiner
COPY . .

# Exponha a porta que o serviço utiliza
EXPOSE 3000

# Comando para iniciar o serviço
CMD ["yarn", "dev"]