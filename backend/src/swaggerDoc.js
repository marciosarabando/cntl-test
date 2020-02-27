const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
 
//Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "API 50.000 Pontos Contele - Dev Marcio Sarabando",
            description: "API para retorno de um JSON contendo 50 mil pontos de localização (Latitude o Longitude)",
            contact: {
                name: "Dev Incrível"
            },
            servers: ["http://localhost:4000"]
        }
    },
    apis: ["src/endpoints.js"]
};

const specs = swaggerJsdoc(swaggerOptions);
 
module.exports = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
}