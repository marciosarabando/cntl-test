# Teste Dev Full Stack - Contele - Makers and Clusters Google Maps API

## Introdução: 
Esta aplicação possui uma página única (SPA) desenvolvida em React e uma API NodeJS que retorna um JSON contendo 50 mil pontos de localização (latitude e longitude). A SPA realiza uma consulta na API e exibe os pontos de forma agrupada em um mapa do Google Maps. Ao realizar o Zoom ocorrerá o desagrupamento até que os pontos únicos sejam apresentados nos locais do mapa.

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
### Frontend e Backend:
1 - Clonar o projeto em um diretório escolhido.</br>
2 - Executar npm install nos diretórios Backend e Frontend.</br>
```sh
backend\npm install
frontend\npm install
```
3 - Executar o Docker Compose.</br>
```sh
docker-compose up
```
4 - Aguardar a inicialização dos dois containers e realizar os acessos.</br>

 ## URLs de Execução:
<p>API: http://localhost:4000</p>
<p>API DOCS: http://localhost:4000/api-docs
<p>WEB: http://localhost:3000</p>

## Considerações finais: 
Após inicializar os containers com o docker-compose a aplicação irá subir em alguns segundos. Esta é uma das infinitas maneiras de resolver este desafio. E reconheço que ao me aprofundar no conhecimento e com a prática, encontrarei padrões ainda mais assertivos para se adotar.

Atenciosamente,

Marcio Sarabando.