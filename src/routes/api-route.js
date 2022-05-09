const route = require ('express').Router();
const controllerApi = require('../controllers/api.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const lock = require('../middlewares/auth.middleware');

const{
    validId,
    validObjectBody,
    existID,
    
} = require('../middlewares/api.middleware');

route.use('/api-docs',  swaggerUi.serve);
route.get('/api-docs',  swaggerUi.setup(swaggerDocument));

route.get('/all-api', lock, controllerApi.findAllApi);
route.get('/id/:id', lock, validId, existID, controllerApi.findByIdApi);
route.get('/search-name/:name', lock, controllerApi.searchApi);
route.delete('/delete/:id', lock,  validId, existID, controllerApi.deleteApi);
route.put('/update/:id', lock, validId, existID, controllerApi.updateApi);
route.post('/creat', lock, validObjectBody, controllerApi.creatApi);

module.exports = route;