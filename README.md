
# Hogwarts Catalog
Este projeto é uma aplicação frontend responsiva desenvolvida como um desafio técnico para um processo seletivo de estágio. O objetivo é criar um catálogo interativo do universo Harry Potter, consumindo dados da [HP API](https://hp-api.onrender.com).


## Demonstração

![GIF Hogwarts Catalog](https://i.imgur.com/6Mn8EvF.gif)
## 🚀 Funcionalidades
- **Navegação por 5 Páginas**: Home, Alunos, Funcionários, Feitiços e Casas.

- **Catálogos Dinâmicos**: As páginas de Alunos, Funcionários e Feitiços consomem dados da API em tempo real.

- **Carregamento Otimizado** (UI/UX): Esqueletos de carregamento (Skeletons) são exibidos enquanto os dados da API são buscados.

- **Filtro por Casas**: A página de Casas permite ao usuário clicar em uma casa e ver uma lista filtrada de alunos.

- **Design Responsivo**: A grade de cards se adapta de 4 para 3, 2 ou 1 coluna, dependendo do tamanho da tela.

- **Containerizado**: A aplicação é totalmente gerenciada com Docker e Docker Compose.

## 🛠️ Tecnologias
O desafio exigia o uso de tecnologias específicas, com foco em um ecossistema moderno de frontend:

- **Frontend**: React com TypeScript

- **Roteamento**: React Router

- **Requisições HTTP**: Axios

- **Estilização**: CSS (CSS puro com Flexbox, Grid e Media Queries)

- **Infraestrutura**: Docker e Docker Compose
## ⚙️ Como Executar Localmente
Este projeto é configurado para ser executado com Docker, como exigido pelo desafio.

### Pré-requisitos
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado e em execução.
- [Git](https://git-scm.com/)

### Passos para Execução
#### 1. Clone o repositorio
```Bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```
#### 2. Crie o arquivo de ambiente
Crie um arquivo chamado .env na raiz do projeto e adicione a seguinte variável (ela é lida pelo docker-compose.yml):

```Snippet de código
REACT_APP_API_BASE_URL=https://hp-api.onrender.com/api
```

#### 3. Suba o contêiner:
Use o Docker Compose para construir a imagem e iniciar o contêiner.

```Bash
docker-compose up --build
```

#### 4. Acesse a aplicação:
Abra seu navegador e acesse http://localhost:3000.
    
