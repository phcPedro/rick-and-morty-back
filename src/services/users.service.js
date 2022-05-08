const User = require("../models/User");

const findAllUsers = async ()=>{return await User.find();}

const findByEmailUserService = (email) => User.findOne({email:email});

const creatUserService = (body) => User.create(body);

module.exports = {
    findByEmailUserService,
    creatUserService,
    findAllUsers
};
