# GitHubUse

O projeto consiste em buscar usuários por meio da API do GitHub, exibindo dados como repositórios, e-mail, nome do usuário, etc.

## Rotas
- pagina principal: http://localhost:4200/
- pagina do usuário: http://localhost:4200/usuario/nome_do_usario

## Versões 
- versão utilizada do Angular: 17.3.0
- versão do Node: 18.14.2

## Como rodar:
- ng server
    #### Dependencias externas 
    - Ngx Spinner (npm i ngx-spinner):

## Arquitetura 

A pasta componentes contém a lógica e o layout de cada componente da aplicação. A pasta models armazena todas as interfaces responsáveis pelas regras de negócio da aplicação. Na pasta páginas, encontram-se as duas principais páginas: a página inicial e a página de usuário. A pasta services abriga todas as requisições e serviços da aplicação.

O projeto foi desenvolvido utilizando Angular na versão 17, sem a utilização de módulos standalone.

## Bibliotecas usadas 
- Angular material: Foi utilizado angular material, tanto por ser nativo do Angular como pela facilidade de usar seus componentes 
- Bootstrap: Utilizei o Bootstrap, pois tenho bastante dominio com ele, alem de ajudar bastante para deixar o site responsivo
- Ngx Spinner (npm i ngx-spinner): Utilizei essa Lib externa para me axuliar na tela de carregamento, com intuito de facilitar o desenvolvimento e entregar layouts prontos para serem usados