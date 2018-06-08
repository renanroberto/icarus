# Projeto Icarus

Um boilerplate rápido e flexível para e-commerces vtex

## Como usar

### Instalação

1. Clone este repositório `git clone https://github.com/renanroberto/icarus.git`
2. Delete o arquivo `.git`
3. Renomeie a pasta e as informações necessarias no `package.json`
4. Instale as dependencias `npm install`

### Configurar o projeto

...

### Iniciar o *Icarus*

O *Icarus* pode ser iniciado em dois modos: **Local** e **Vtex Local**.

- **Local**
Para iniciar o modo local basta usar o comando `npm run local`. O *Icarus* irá abrir a página configurada no `.env` em seu navegador com Hot Module Replacement (HMR) habilitado.
*Obs.: Os componentes vtex não serão renderizados, para isto deverá ser usado o modo Vtex Local*
- **Vtex Local**

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
