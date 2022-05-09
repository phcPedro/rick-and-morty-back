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
  res.send(await apiService.findApiByIdService(req.params.id));
};

const searchApi = async(req,res)=>{
    
    if(!(await apiService.searchApiService(req.params.name))){
        return res.status(404).send({message:"Character not found!"});
    };
    
    res.send (await apiService.searchApiService(req.params.name));

};

const creatApi = async (req,res) =>{
    res.status(201).send(await apiService.creatApiService(req.body));
};

const updateApi = async (req, res) =>{
  res.status(201).send(await apiService.updateApiService(req.params.id, req.body));
};

const deleteApi = async (req,res) => {
    await apiService.deleteApiService(req.params.id);
    res.send({message: 'Personagem excluido com sucesso!'});
};

module.exports = {
    findAllApi,
    findByIdApi,
    creatApi,
    updateApi,
    deleteApi,
    searchApi
};