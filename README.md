Projeto: Coda e Dorme (Back-end + Front-end)

📌 Descrição

Este projeto é composto por um back-end em Java (Spring Boot) e um front-end em Next.js (React + TypeScript), ambos containerizados para facilitar o deploy em ambientes como Docker ou Kubernetes.

O sistema parece se tratar de uma aplicação web (possivelmente um sistema de gestão ou e-commerce) com APIs RESTful no back-end e uma interface SPA/SSR no front-end.

⚙ Tecnologias usadas

Back-end (Java + Spring Boot)

Java 17

Spring Boot 3.4.3

Maven (build e gerenciamento de dependências)

PostgreSQL (definido nas variáveis de ambiente do Containerfile)

JPA / Hibernate (persistência)

Camadas: API, Serviço, Repositório (indicando uso de arquitetura em camadas)

Front-end (Next.js + React)

Next.js 15.3.1 (React 19)

TypeScript

PostCSS (para estilos)

Axios (requisições HTTP)

React Hook Form + resolvers (gerenciamento de formulários)

Nookies (cookies e autenticação)

Containerização

Docker / Containerfile (multi-stage build) no back-end

Dockerfile (multi-stage build) no front-end

🏗 Padrões de arquitetura

Back-end

Arquitetura em camadas: separação entre domínio (models), repositórios (data access), serviços (lógica de negócio) e (possivelmente) controladores REST (não listado, mas esperado no padrão Spring).

RESTful API: esperado no padrão do Spring Boot com JPA.

Front-end

Next.js SSR/SSG: renderização do lado do servidor e geração de páginas estáticas

Componentização React: interface baseada em componentes reutilizáveis

📂 Estrutura do projeto

Back-end

pi_back/
├── Containerfile          # Docker build do back-end
├── pom.xml                # Configuração do Maven
└── src/main/java/br/com/codaedorme/pi/
    ├── PiApplication.java  # Classe principal do Spring Boot
    ├── MenuCommandLineRunner.java # Runner para execução no start
    └── domain/api/cliente/ # Entidades, DTOs, repositórios e serviços relacionados a Cliente

Front-end

pi_front/
├── Dockerfile             # Docker build do front-end
├── package.json           # Dependências e scripts do front-end
├── next.config.ts         # Configurações do Next.js
└── src/                   # Código fonte React + Next.js (não listado mas esperado)

🚀 Como executar

Back-end

Usando Docker

docker build -t pi-back -f Containerfile .
docker run -p 8080:8080 pi-back

Local com Maven

mvn clean package
java -jar target/*.jar

Front-end

Usando Docker

docker build -t pi-front .
docker run -p 3000:3000 pi-front

Local com Node

npm install
npm run dev

🔑 Variáveis e configurações importantes

Back-end (exemplo do Containerfile)

SPRING_DATASOURCE_URL=jdbc:postgresql://db-pi:5432/postgres
SPRING_DATASOURCE_USERNAME=root
SPRING_DATASOURCE_PASSWORD=root

Front-end

Porta padrão: 3000

Next.js tolera erros de build no TypeScript (config ignoreBuildErrors: true)

✉ Contato

Maintainer (conforme Dockerfile front-end): kkaike371@gmail.com

Se quiser, posso gerar também os arquivos docker-compose.yml ou melhorar o README com diagramas de arquitetura. É só avisar! 🚀

Projeto: Coda e Dorme (Back-end + Front-end)

📌 Descrição

Este projeto é composto por um back-end em Java (Spring Boot) e um front-end em Next.js (React + TypeScript), ambos containerizados para facilitar o deploy em ambientes como Docker ou Kubernetes.

O sistema parece se tratar de uma aplicação web (possivelmente um sistema de gestão ou e-commerce) com APIs RESTful no back-end e uma interface SPA/SSR no front-end.

⚙ Tecnologias usadas

Back-end (Java + Spring Boot)

Java 17

Spring Boot 3.4.3

Maven (build e gerenciamento de dependências)

PostgreSQL (definido nas variáveis de ambiente do Containerfile)

JPA / Hibern
