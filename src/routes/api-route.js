const route = require ('express').Router();
const controllerApi = require('../controllers/api.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const{
    validId,
    validObjectBody,
    existID,
    
} = require('../middlewares/api.middleware');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs',swaggerUi.setup(swaggerDocument));

route.get('/all-api', controllerApi.findAllApi);
route.get('/:id', validId, existID, controllerApi.findByIdApi);
route.delete('/delete/:id', validId, existID, controllerApi.deleteApi);
route.put('/update/:id', validId, existID, controllerApi.updateApi);
route.post('/creat', validObjectBody, controllerApi.creatApi);

module.exports = route;