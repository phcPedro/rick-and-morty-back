const res = require('express/lib/response');
const apiService = require('../services/api.service');

const findAllApi = async(req,res) =>{
    const allApi = await apiService.findAllApiService();
    if(allApi.length == 0){
        res.status(404).send({message:`Não existem personagens cadastrados!`});
    }
    res.send(allApi);
};

const findByIdApi = async(req,res) =>{
    const apiId = req.params.id;
    const choiceApi = await apiService.findApiByIdService(apiId);
    res.send(choiceApi);
};

const creatApi = async (req,res) =>{
    const api = req.body;
    const newApi = await apiService.creatApiService(api);
    res.status(201).send(newApi);
}

const updateApi = async (req, res) =>{
  res.send(await apiService.updateApiService(req.params.id, req.body));
};

const deleteApi = async (req,res) => {
    const apiId = req.params.id;
    await apiService.deleteApiService(apiId);
    res.send({message: 'Personagem excluido com sucesso!'});
};

module.exports = {
    findAllApi,
    findByIdApi,
    creatApi,
    updateApi,
    deleteApi
}