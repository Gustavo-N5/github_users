# GitHubUse

O projeto consiste em buscar usuários por meio da API do GitHub, exibindo dados como repositórios, e-mail, nome do usuário, etc.

## Rotas
pagina principal: http://localhost:4200/
pagina do usuário: http://localhost:4200/usuario/nome_do_usario

## Como Rodar? 
ng server ou ng s

## Arquitetura 

A pasta componentes contém a lógica e o layout de cada componente da aplicação. A pasta models armazena todas as interfaces responsáveis pelas regras de negócio da aplicação. Na pasta páginas, encontram-se as duas principais páginas: a página inicial e a página de usuário. A pasta services abriga todas as requisições e serviços da aplicação.

O projeto foi desenvolvido utilizando Angular na versão 17, sem a utilização de módulos standalone.

## Bibliotecas usadas 
. Angular material
. Bootstrap