# generator-rsbdev [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Gerador de projetos RSBdev

## Instala��o

Primeiramente verifique se voc� possui em sua m�quina o node instalado e o npm acima da vers�o 7.

Logo ap�s, instale o [Yeoman](http://yeoman.io) utilizando o [npm](https://www.npmjs.com/) (assumindo que voc� tenha pre-istalado o [node.js](https://nodejs.org/)).

```bash
npm install -g yo
```

Fa�a o clone do generator e acesse a pasta atrav�s dos comandos:

```bash
git clone https://renatorjps@bitbucket.org/rsbdev-git/generator-rsbdev.git
cd generator-rsbdev
```

Como o gerados da RSBdev n�o estar� no reposit�rio do Yeoman � necess�rio fazer uma instala��o local atrav�s dos comandos:

```bash
npm install
npm link
```

Agora vamos gerar o seu novo projeto. Escola um diret�rio no qual deseja criar o projeto e execute o comando:

```bash
yo rsbdev
```

# Executando o projeto

Ap�s realizados os passos acima seu projeto j� estar� criado. Agora iremos instalar as depend�ncias do frontend e backend e executar o projeto.

Acesse a pasta nomedoprojeto/frontend e execute os comandos:

```bash
npm install
npm run build
```

Logo ap�s, acesse a pasta nomedoprojeto/backend e execute os comandos:

```bash
mvnw install
mvnw spring-boot:run
```

## Acessado a aplica��o

Pronto! Realizado os passos acima sua aplica��o j� estar� rodando LOUCA-mente.
Acesse o endere�o http://localhost:8080

usu�rio: admin@admin.com / senha: admin

## Licen�a

MIT � [Renato Santos](https://rsbdev.com.br)


[npm-image]: https://badge.fury.io/js/generator-rsbdev.svg
[npm-url]: https://npmjs.org/package/generator-rsbdev
[travis-image]: https://travis-ci.org/renato-rjps/generator-rsbdev.svg?branch=master
[travis-url]: https://travis-ci.org/renato-rjps/generator-rsbdev
[daviddm-image]: https://david-dm.org/renato-rjps/generator-rsbdev.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/renato-rjps/generator-rsbdev
