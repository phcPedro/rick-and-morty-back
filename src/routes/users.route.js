const router = require("express").Router();
const userController = require('../controllers/users.controller');

router.post("/creat-user", userController.creatUserController);
router.get("/allusers", userController.findAllUserController);

module.exports = router;

