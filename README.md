# generator-rsbdev [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Gerador de projetos RSBdev

## Instalação

Primeiramente verifique se você possui em sua máquina o node instalado e o npm acima da versão 7.

Logo após, instale o [Yeoman](http://yeoman.io) utilizando o [npm](https://www.npmjs.com/) (assumindo que você tenha pre-istalado o [node.js](https://nodejs.org/)).

```bash
npm install -g yo
```

Faça o clone do generator e acesse a pasta através dos comandos:

```bash
git clone https://renatorjps@bitbucket.org/rsbdev-git/generator-rsbdev.git
cd generator-rsbdev
```

Como o gerados da RSBdev não estará no repositório do Yeoman é necessário fazer uma instalação local através dos comandos:

```bash
npm install
npm link
```

Agora vamos gerar o seu novo projeto. Escola um diretório no qual deseja criar o projeto e execute o comando:

```bash
yo rsbdev
```

# Executando o projeto

Após realizados os passos acima seu projeto já estará criado. Agora iremos instalar as dependências do frontend e backend e executar o projeto.

Acesse a pasta nomedoprojeto/frontend e execute os comandos:

```bash
npm install
npm run build
```

Logo após, acesse a pasta nomedoprojeto/backend e execute os comandos:

```bash
mvnw install
mvnw spring-boot:run
```

## Acessado a aplicação

Pronto! Realizado os passos acima sua aplicação já estará rodando LOUCA-mente.
Acesse o endereço http://localhost:8080

usuário: admin@admin.com / senha: admin

## Licença

MIT © [Renato Santos](https://rsbdev.com.br)


[npm-image]: https://badge.fury.io/js/generator-rsbdev.svg
[npm-url]: https://npmjs.org/package/generator-rsbdev
[travis-image]: https://travis-ci.org/renato-rjps/generator-rsbdev.svg?branch=master
[travis-url]: https://travis-ci.org/renato-rjps/generator-rsbdev
[daviddm-image]: https://david-dm.org/renato-rjps/generator-rsbdev.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/renato-rjps/generator-rsbdev
