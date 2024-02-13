const express = require("express");
const { getAllUsers, getOneUser, deleteUser, createUser, updateUser } = require("../controllers/userController");
const routerUser = express.Router();


routerUser.get("",getAllUsers);
routerUser.get("/:id",getOneUser);
routerUser.delete('/:id', deleteUser);
routerUser.post('', createUser);
routerUser.put('/:id',updateUser);

module.exports = routerUser;