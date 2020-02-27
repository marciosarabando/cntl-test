# Teste Dev Full Stack - Contele - Makers and Clusters Google Maps API

## Objetivo: 
Esta aplicação possui uma página única (SPA) desenvolvida em React, que realiza uma consulta em uma API e retorna um JSON contendo 50 mil pontos de localização, que serão exibidos de forma agrupada em um mapa do Google Maps.
Ao realizar o Zoom ocorrerá o desagrupamento, até que os pontos únicos sejam apresentados nos locais retornados pela API.

## Tecnologias utilizadas:
<ul>
    <li>HTML/CSS/JavaScript</li>
    <li>React</li>
    <li>NodeJS</li>
    <li>Docker</li>
    <li>Swagger API</li>
    <li>Google Maps</li>
</ul>

## Instalação:
### FrontEnd e Backend:
1 - Clonar o projeto em um diretório escolhido</br>
2 - Executar npm install nos diretórios Backend e Frontend </br>
```sh
backend\npm install
frontend\npm install
```
3 - Executar o Docker Compose</br>
```sh
docker-compose up
```
4 - Aguardar a inicialização dos dois containers e realizar os acessos.</br>

 ## URLs de Execução:
<p>API: http://localhost:4000</p>
<p>API-DOCS: http://localhost:4000/api-docs
<p>WEB: http://localhost:3000</p>

## Considerações: 
Após inicializar os containers com o docker-compose, a aplicação irá subir em alguns segundos. A solução adotada é uma das infinitas maneiras de programar este desafio, e reconheço que ao me aprofundar no conhecimento e com a prática encontrarei padrões ainda melhores para se utilizar.

Atenciosamente,

Marcio Sarabando.