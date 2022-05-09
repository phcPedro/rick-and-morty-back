const router = require("express").Router();
const userController = require('../controllers/users.controller');
const lock = require("../middlewares/auth.middleware")

router.post("/creat-user", userController.creatUserController);
router.get("/allusers",  userController.findAllUserController);

module.exports = router;

