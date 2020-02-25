const express = require('express')
const endpoints = require('./endpoints')
const swaggerDoc = require('./swaggerDoc')
const bodyParser = require('body-parser')
const allowCors = require('./cors')

const port = 4000
const app = express(express);

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(allowCors)

endpoints(app)
swaggerDoc(app)

app.use((err, req, res, next) => console.error('ERRO:', err))

app.listen(port, () => console.log(`API POI CNTL - MSARABANDO - RODANDO NA PORTA: ${port}`))