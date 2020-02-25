const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
 
const options = {
    swaggerDefinition: {
        info: {
            title: 'API RoadMap Contele - Teste Marcio Sarabando',
        },
        basePath: '/'
    },
    apis: ['endpoints.js'],
};

const specs = swaggerJsdoc(options);
 
module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}