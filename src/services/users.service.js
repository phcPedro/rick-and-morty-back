const User = require("../models/User");

const findAllUsers = async ()=>{return await User.find();}

const findByEmailUserService = (email) => User.findOne({email:email});

const creatUserService = (body) => User.create(body);

const findByIdUserService = (idUser) => User.findById(idUser);

module.exports = {
    findByEmailUserService,
    creatUserService,
    findAllUsers,
    findByIdUserService
};
