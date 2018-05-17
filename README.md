# Projeto Icarus

Um boilerplate rápido e flexível para e-commerce

## Como usar

Usar o Icarus é algo realmente simples, basta seguir os passos abaixo.

### 1. Baixe o projeto

No terminal, use o comando `git clone https://github.com/renanroberto/icarus.git` para baixar o projeto e, em seguida, `cd icarus/` para acessar o diretório do projeto.

### 2. Configure o projeto

Renomeie o diretório para o nome do projeto e edite o arquivo `.env` com as configurações do projeto.

### 3. Instale as dependências

Novamente no terminal, use o comando `npm install`. Caso não tenha o grunt instalado, use também `npm install --global grunt-cli` (necessário usar sudo). Isto irá instalar todas as dependências necessárias para o projeto.

### 4. Iniciar o Icarus

Para começar a desenvolver basta usar o comando `npm start`. Neste momendo acesse `{nome-do-projeto}.vtexlocal.com.br` em seu navegador e um ambiente com hot-reload estará preparado para que você comece o projeto.

### 5. Produção

Quando for subir a loja é fortemente recomendado que faça isso em modo de produção. Para isto basta usar o comando `npm run build` que o Icarus irá fazer todo o trabalho de otimizar os arquivos para produção na pasta `dist/`.

## Features

- Configuração fácil
- Super rápido!
- Hot Reload (Vtex Local)
- Cross Browser configurável (*default: Duas ultimas versões de cada browser e browsers com mais de 1% de uso global*)
- React

## Stack

- Webpack
- Babel
- React
- PostCSS

## TODO

- [x] Adicionar plugin para minizar css
- [x] Mover templates do Profite X para a pasta templates (templates vazios)
- [x] Estrutura para React
- [x] Verificar se o JS continua sendo minimizado
- [x] Vtex local
- [x] Production mode não entra em watch mode
- [x] Development mode não minimiza arquivos
- [x] Adicionar ESlint (AirBnB)
- [x] Adicionar Style linter
- [x] Implementar uma framework de testes (Jest)
- [x] Implementar common.js
- [x] Definir alias para path
- [x] Vtex local sem sudo
- [x] Remover configurações de teste (.env)
- [ ] Implementar webpack-dev-server
- [ ] Implementar reset/normalize de css
- [ ] Implementar Enzyme para testes com React
- [ ] Implementar teste end-to-end (Puppeteer)
- [ ] Alterar o filename pattern
