# Projeto Icarus

Um boilerplate rápido e flexível para e-commerces vtex

## Tabela de conteúdo

1. [Como usar](#como-usar)
1.1 [Instalação](#instalação)
1.2 [Configurar o projeto](#configurar-o-projeto)
1.3 [Iniciar o Icarus](#inicar-o-icarus)
2. [Features](#features)
3. [Stack](#stack)
4. [TODO](#todo)

## Como usar

### Instalação

1. Clone este repositório `git clone https://github.com/renanroberto/icarus.git`
2. Delete o arquivo `.git`
3. Renomeie a pasta e as informações necessarias no `package.json`
4. Instale as dependencias `npm install`

### Configurar o projeto

Para configurar o projeto basta abrir o arquivo `.env` e mudar as variáveis de acordo com as especificidades do projeto. As variáveis são:
- **PROJECT** - Nome do projeto
- **VTEX_ACCOUNT** - Nome da conta vtex
- **VTEX_ENV** - Ambiente vtex (ex.: vtexcommercestable)
- **SECURE_URL** - HTTPS? (boolean)
- **PAGE** - Nome da página que será servida no modo local
- **HOST** - Seu IP local
- **SHARE** - Será compartilhado com a rede? (boolean)

### Iniciar o *Icarus*

O *Icarus* pode ser iniciado em três modos: **Local**, **Vtex Local** e **Produção**.

- **Local**
Para iniciar no modo local basta usar o comando `npm run local`. O *Icarus* irá abrir a página configurada no `.env` em seu navegador com Hot Module Replacement (HMR) habilitado.
*Obs.: Os componentes vtex não serão renderizados, para isto deverá ser usado o modo Vtex Local*
- **Vtex Local**
Para iniciar no modo vtex local basta usar o comando `npm start` e acessar `http://localhost:8080`. O *Icarus* irá proxiar os templates da vtex com os arquivos JS e CSS locais com Hot Reload.
- **Produção**
Para iniciar no modo de produção basta usar o comando `npm run build`. O Icarus irá minificar os arquivos e as imagens e deixar tudo na pasta `dist/`.

## Features

- Configuração fácil
- Super rápido!
- Hot Reload (Vtex Local e Webpack Dev Server)
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
- [x] Implementar normalize de css
- [x] Implementar webpack-dev-server
- [x] Sharing opcional
- [x] Alterar o filename pattern
- [ ] Implementar Enzyme para testes com React
- [ ] Implementar teste end-to-end (Recomendação: Puppeteer)
