# Uniclass API 🎓📍

> Protótipo de sistema de geolocalização e gestão acadêmica indoor/outdoor para o Unipê.

A Uniclass é uma plataforma robusta desenvolvida para resolver problemas de localização e comunicação dentro do campus universitário. O sistema utiliza uma arquitetura **Multi-tenant**, permitindo que múltiplas instituições utilizem a mesma infraestrutura de forma isolada e segura.

---

## 🚀 Tecnologias e Ferramentas

O projeto utiliza o que há de mais moderno no ecossistema JavaScript/TypeScript para garantir performance e escalabilidade:

* **Framework:** [NestJS](https://nestjs.com/) (Node.js)
* **Linguagem:** TypeScript
* **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/) com extensão **PostGIS**
* **ORM:** [Prisma](https://www.prisma.io/)
* **Autenticação:** JWT (JSON Web Tokens) com Roles (ADMIN, PROFESSOR, ALUNO)
* **Geoprocessamento:** [GraphHopper](https://www.graphhopper.com/) (Roteamento) e [QGIS](https://qgis.org/) (Processamento de Mapas)
* **Documentação:** Swagger (OpenAPI)
* **Testes:** Jest & Supertest (E2E)

---

## 🏗️ Arquitetura do Sistema

A API foi desenhada seguindo os princípios da **Clean Architecture** e **SOLID**, garantindo que as regras de negócio (Core) sejam independentes de detalhes de implementação (Infra).

### Destaques Técnicos:
* **Isolamento Multi-tenant:** Filtros de `instituicao_id` aplicados via chaves compostas no banco de dados.
* **Persistência de Mapas:** Uso estratégico de campos `JSON` para armazenamento de coordenadas $\{x, y\}$ e metadados geográficos.
* **Segurança:** Controle de acesso baseado em funções (RBAC) e limpeza de banco de dados automatizada para ambientes de teste.
* **Integridade:** Deleção em cascata (`onDelete: Cascade`) e preservação de referências (`onDelete: SetNull`) configuradas via Prisma.

---

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado:
* [Node.js](https://nodejs.org/) (v18 ou superior)
* [Docker](https://www.docker.com/) (Para o banco de dados e GraphHopper)
* [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

---

## 📖 Documentação da API (Swagger)

A API do Uniclass é totalmente documentada utilizando o padrão **OpenAPI 3.0**. Através da interface do Swagger, é possível visualizar todos os endpoints, esquemas de dados (DTOs) e testar as requisições em tempo real.

### Como acessar:
1. Certifique-se de que a aplicação está rodando (`npm run start:dev`).
2. Acesse no seu navegador: `http://localhost:3000/api`

### Como testar endpoints protegidos:
A maioria das rotas do Uniclass exige autenticação. Siga estes passos no Swagger:
1. Localize o módulo **Autenticação** e realize o login com suas credenciais.
2. Copie o `access_token` retornado no corpo da resposta.
3. Clique no botão **"Authorize"** (ícone do cadeado) no topo da página.
4. Cole o token e clique em **Authorize**.
5. Agora, o ícone do cadeado aparecerá fechado, permitindo que você execute chamadas para rotas de ADMIN, Professor ou Aluno.

---

## 🛠️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes chaves:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/uniclass_db?schema=public"
JWT_SECRET="sua_chave_secreta_aqui"
PORT=3000