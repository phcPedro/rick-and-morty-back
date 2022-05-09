const {default: mongoose} = require('mongoose');
const { creatApiService } = require('../services/api.service');
const apiService = require('../services/api.service');

const validId = (req, res, next)=>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
     return res.status(400).send({message:'Id do personagem invalido!'});
 }
 next();
}


const existID = async (req,res,next) =>{
 const exist = await apiService.findApiByIdService(req.params.id);
  if(!exist){
    return res.status(404).send({message:`ID inexistente!`});
  }
  next();
 }
 
const validObjectBody = (req, res, next) => {
    const api = req.body;
    if(!api|| !api.name|| !api.image)
    {
        return res
        .status(400)
        .send({
            message:
            "Precisa preencher todos os campos!",
        });
    }
    next();
}
module.exports ={
    validId,
    validObjectBody,
    existID
};