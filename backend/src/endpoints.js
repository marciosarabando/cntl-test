const fs = require("fs");
var jsonData = new String;

fs.readFile("./json/poi.json" , "utf8", function(err, data){
    if(err){
      return console.log(`Erro ao ler arquivo: ${err}`);
    }
    jsonData = data;
  });

const initializeEndpoints = (app) => {
    /**
     * @swagger
     * /points:
        get:
            tags:
            - "points"  
            description: "Retorna as coordenadas de Latitude e Longitude para ser consumida no Google Maps API"
     */

    app.get('/points', (req, res) => res.end(jsonData));
}

module.exports = initializeEndpoints;