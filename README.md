# Projeto Icarus

Um boilerplate rápido e flexível para e-commerces vtex

## Como usar

Usar o Icarus é algo realmente simples, basta seguir os passos abaixo.

### Baixe o projeto

No terminal, use o comando `git clone https://github.com/renanroberto/icarus.git` para baixar o projeto.

### Instale as dependências

Ainda no terminal, na pasta do projeto, use o comando `npm install`. Caso não tenha o grunt instalado, use também `npm install --global grunt-cli` (talvez seja necessário usar o sudo). Isto irá instalar todas as dependências necessárias para o projeto.

### Iniciar o Icarus

Para começar a desenvolver basta usar o comando `npm run dev` e, quando tiver terminado, utilize o comando `npm run build` para compilar o projeto para produção.

## TODO

- [x] Adicionar plugin para minizar css
- [x] Mover templates do Profite X para a pasta templates (templates vazios)
- [x] Estrutura para React
- [x] Verificar se o JS continua sendo minimizado
- [x] Vtex local
- [x] Production mode não entra em watch mode
- [x] Development mode não minimiza arquivos
- [ ] Remover configurações de teste (mudar nome dos arquivos compilados e as variavies de ambiente)
- [ ] Fazer o vtex local funcionar sem o Grunt
- [ ] Implementar uma framework de testes
