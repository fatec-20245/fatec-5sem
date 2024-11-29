# Etapa 1: Build
FROM golang:1.23.2 AS builder

# Configura o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências e faz o download
COPY go.mod ./
RUN go mod download

# Copia o código-fonte para o container
COPY . .

# Compila o binário
RUN go build -o my-go-app

# Etapa 2: Runtime
FROM debian:bullseye-slim

# Define um diretório de trabalho no container
WORKDIR /app

# Copia o binário compilado da etapa de build
COPY --from=builder /app/my-go-app .

# Expõe a porta que a aplicação usa (opcional, caso tenha servidor)
EXPOSE 8080

# Comando para executar o binário
CMD ["./my-go-app"]
