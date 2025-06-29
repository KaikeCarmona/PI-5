# Projeto: Coda e Dorme (Back-end + Front-end)

## 📌 Descrição

Projeto integrador realizado durante o quinto semestre do curso de analise e desenvolvimento de sistemas do Centro Universitario Senac. O objetivo desse projeto foi criar uma aplicacao full-stack web com authenticacao de usuarios no contexto de ecomerce.

O projeto é composto por um **back-end** em Java (Spring Boot) e um **front-end** em Next.js (React + TypeScript), ambos containerizados para facilitar o deploy em ambientes como Docker ou Kubernetes.

---

## ⚙ Tecnologias usadas

### Back-end (Java + Spring Boot)

- **Java 17**
- **Spring Boot 3.4.3**
- **Spring Security**
- **Java JWT**
- **Maven** (build e gerenciamento de dependências)
- **PostgreSQL** (definido nas variáveis de ambiente do `Containerfile`)
- **JPA / Hibernate** (persistência)
- **Camadas**: API, Serviço, Repositório (indicando uso de arquitetura em camadas)

### Front-end (Next.js + React)

- **Next.js 15.3.1** (React 19)
- **TypeScript**
- **PostCSS** (para estilos)
- **Axios** (requisições HTTP)
- **React Hook Form + resolvers** (gerenciamento de formulários)
- **Nookies** (cookies e autenticação)

### Containerização

- **Docker / Containerfile (multi-stage build)** no back-end
- **Dockerfile (multi-stage build)** no front-end

---

## 🏗 Padrões de arquitetura

### Back-end

- **Arquitetura em camadas**: separação entre domínio (models), repositórios (data access), serviços (lógica de negócio) e controladores REST.
- **RESTful API**: esperado no padrão do Spring Boot com JPA.

### Front-end

- **Next.js SSR/SSG**: renderização do lado do servidor e geração de páginas estáticas
- **Componentização React**: interface baseada em componentes reutilizáveis

---

## 📂 Estrutura do projeto

### Back-end

pi_back/
├── Containerfile                   # Docker build do back-end
├── pom.xml                         # Configuração do Maven
└── src/main/java/br/com/codaedorme/pi/
├── PiApplication.java           # Classe principal do Spring Boot
├── MenuCommandLineRunner.java   # Runner para execução no start
└── domain/
├── api/cliente/             # API, entidades, DTOs e serviços do cliente
├── repository/              # Repositórios JPA
└── service/                 # Lógica de negócio


### Front-end


pi_front/
├── Dockerfile                      # Docker build do front-end
├── package.json                    # Dependências e scripts do front-end
├── next.config.ts                  # Configurações do Next.js
└── src/
├── components/                 # Componentes React reutilizáveis
├── pages/                       # Páginas Next.js (SSR/SSG)
├── services/                    # Serviços de API (Axios)
└── styles/                      # Estilos globais e PostCSS


---

## 🚀 Como executar

### Back-end

#### Local com Maven

```bash
mvn clean package
java -jar target/*.jar
```

#### Utilizando imagem disponivel no DockerHub

##### Utilizando linha de comando para realizar cadastros

```bash
podman pull docker.io/kaikecarmona/pi-backend:v2
```

```bash
podman run --name pi-backend --network rede-containers-pi \
  -p 8080:8080 \
  -e SPRING_DATASOURCE_URL=jdbc:postgresql://db-pi:5432/postgres \
  -e SPRING_DATASOURCE_USERNAME=root \
  -e SPRING_DATASOURCE_PASSWORD=root \
  -e APP_MODE=cli \
  -it \
  docker.io/kaikecarmona/pi-backend:v2
```
##### Sem linha de comando, rodando em backlog
```bash
podman run --name pi-backend --network rede-containers-pi \
  -p 8080:8080 \
  -e SPRING_DATASOURCE_URL=jdbc:postgresql://db-pi:5432/postgres \
  -e SPRING_DATASOURCE_USERNAME=root \
  -e SPRING_DATASOURCE_PASSWORD=root \
  -d \
  docker.io/kaikecarmona/pi-backend:v2
```

### Front-end

#### Local no console
```bash
npm install
npm run dev
```

#### Utilizando imagem disponivel no DockerHub

```bash
podman pull docker.io/kaikecarmona/pi-frontend:v2
```

```bash
odman run --name pi-frontend --network rede-containers-pi   -p 3000:3000  -d  pi-frontend
```

##### Lembre-se de criar uma rede para inserir seus containers antes de roda-los
```bash
podman network create rede-containers-pi
```


## 🔑 Variáveis e configurações importantes

### Back-end (exemplo do Containerfile)
```bash
SPRING_DATASOURCE_URL=jdbc:postgresql://db-pi:5432/postgres
SPRING_DATASOURCE_USERNAME=root
SPRING_DATASOURCE_PASSWORD=root
```

### Front-end
```bash
Porta padrão: 3000
Next.js tolera erros de build no TypeScript (config ignoreBuildErrors: true)
```


## ✉ Contato

Maintainer: kkaike371@gmail.com
