const userService = require("../services/users.service");
const authService = require("../services/auth.service");


const findAllUserController = async(req,res) =>{
    const allUsers = await userService.findAllUsers();
    if (allUsers.length == 0){
        res.status(404).send({message:`Não existem usuarios cadastrados!`});
    }
    
    res.send(allUsers);
};

const creatUserController = async(req,res) =>{
     const {username, name, password, email}= req.body;

     if(!username || !name || !email || !password){
         return res.status(400).send({
             message:
             "Todos os campos devem ser preenchidos: 'username', 'name', 'email' e 'password' "
         });
     }

     const foundUser = await userService.findByEmailUserService(email);

     if(foundUser){
          return res.status(400).send({
              message:"Usuário já existe!",
          });
     }

     const user = await userService
     .creatUserService(req.body)
     .catch((err) => console.log(err, message));

     if(!user){
         return res.status(400).send({
             message:"Erro ao criar Usuário!",
         });
     }

     const token = authService.generateToken(user.id)

     res.status(201).send({
         user:{
             id: user.id,
             name,
             username,
             email,
         },
        token,
    });
};

module.exports = {
    creatUserController,
    findAllUserController
};