const fs = require("fs");
var jsonData = new String;

fs.readFile("./json/poi.json" , "utf8", function(err, data){
    if(err){
      return console.log(`Erro ao ler arquivo: ${err}`);
    }
    jsonData = data;
  });

const initializeEndpoints = (app) => {
// Routes
/**
 * @swagger
 * /points:
 *  get:
 *    description: Use para requisitar os 50.000 pontos de localização
 *    responses:
 *      '200':
 *        description: Requisição com Sucesso
 */
app.get('/points', (req, res) => res.end(jsonData));
}

module.exports = initializeEndpoints;