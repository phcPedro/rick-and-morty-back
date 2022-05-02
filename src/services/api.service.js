const Api = require('../models/Api');

const findAllApiService = async ()=>{
   return await Api.find();
};

const creatApiService = async (newApi)=>{
   return await Api.create(newApi);
};

const findApiByIdService = async (id) =>{
    return await Api.findById(id);
}

const updateApiService = async (id, apiEdited) => {
    return await Api.findByIdAndUpdate(id, apiEdited);
}

const deleteApiService = async (id) =>{
    return await Api.findByIdAndDelete(id);
}

module.exports = {
    findAllApiService,
    creatApiService,
    findApiByIdService,
    updateApiService,
    deleteApiService
};