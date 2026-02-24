# 🗺️ Uniclass - Campus Navigation System

![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-success)
![Stack](https://img.shields.io/badge/Stack-Node.js%20%7C%20NestJS%20%7C%20Java-blue)
![Map](https://img.shields.io/badge/Map-Leaflet%20%7C%20QGIS-green)

O **Uniclass** é uma plataforma de navegação indoor e outdoor desenvolvida para guiar novos alunos e visitantes pelo campus universitário. O projeto une engenharia de dados, teoria dos grafos e design arquitetônico para entregar rotas precisas e uma interface de mapa imersiva em 2.5D.

## Principais Funcionalidades

* 📍 **Roteamento Inteligente:** Cálculo de rotas otimizadas para pedestres considerando calçadas, escadas e atalhos reais do campus utilizando grafo e vetorização totalmente personalizada criadas do zero.
* 🏢 **Visualização 2.5D:** Prédios e blocos renderizados com volumetria (extrusão), cores pastéis e sistema de transparência ao contato, facilitando o reconhecimento visual.
* ↕️ **Navegação Multi-andares (Uniclass3D v1.0):** Sistema de seleção de camadas interativo, permitindo visualizar o interior de edifícios e trocar de andares sem a necessidade de sensores de hardware.
* 🔍 **Busca de POIs:** Localização rápida de salas, auditórios, bibliotecas, lanchonetes e pontos de apoio.

---

![GIF de geofencing 3D na prática](./frontend/public/mapa/map-docs/readme-files/Geofencing%203d.gif)  ![Imagem do Uniclass3D v1.0](./frontend/public/mapa/map-docs/readme-files/Uniclass3D%20v1.0.jpg)

---

## 🛠️ Stack Tecnológica

O ecossistema do Uniclass é dividido em processamento geoespacial, lógica de roteamento e aplicação web/mobile.

**Backend & Roteamento**
* **NestJS / Node.js (TypeScript):** API REST principal para gerenciamento de dados, POIs e lógica de negócios.
* **GraphHopper (Java):** Engine de cálculo de rotas e processamento do grafo vetorial.
* **PostgreSQL:** Banco de dados relacional.

**Frontend & Mapeamento**
* **Leaflet.js:** Biblioteca principal para renderização interativa do mapa no navegador/mobile.
* **QGIS:** Ferramenta utilizada para vetorização do campus, topologia de grafos, design de tiles e estruturação de dados geográficos personalizada (GeoJSON/OSM).

## 🏗️ Arquitetura e Fluxo de Dados

1.  **Vetorização:** Todo o campus foi mapeado e desenhado manualmente no QGIS, garantindo conectividade topológica perfeita.
2.  **Tiles Visuais (Frontend):** O design 2.5D e as texturas de solo são exportados do QGIS como Tiles (EPSG:3857) e servidos diretamente para o Leaflet.
3.  **Grafo de Rotas (Backend):** A malha viária é exportada em formato `.osm` (EPSG:4326) e processada pelo GraphHopper, que cria a árvore de navegação lida pelo servidor NestJS.

## 🚀 Como Executar o Mapa Localmente

### Pré-requisitos
* Node.js (v18+)
* NPM ou Yarn
* Docker & Docker Compose (Necessário para o banco de dados PostgreSQL)
* Java (v17+) para o GraphHopper
* PostgreSQL

### Passos
1. #### Clone o repositório:
   ```bash
   git clone https://github.com/ItalocOliveira/Uniclass-v2.0

2. #### Instale as dependências:
    ```bash
    cd frontend
    npm install
3. #### Inicie o servidor de desenvolvimento:
    ```bash
    npm run start
4. #### Inicie o servidor GraphHopper com o mapa do campus:
    ```bash
    # Em outro terminal, digite:
    cd graphHopper_server
    java -jar graphhopper-web-10.0.jar server config.yml

---
## 🤝 Contribuição
Contribuições são sempre bem-vindas! Se você tem ideias para melhorar a interface, otimizar o grafo de rotas ou expandir os dados do campus, sinta-se à vontade para abrir uma Issue ou enviar um Pull Request.


## 📝 Licença

### Este projeto é proprietário e o código-fonte está disponível publicamente apenas para fins de portfólio.
### © 2026 Ítalo Oliveira e Unitech Development Team. Todos os direitos reservados.


