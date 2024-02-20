const express = require("express");
const {
  getAllUsers,
  getOneUser,
  deleteUser,
  createUser,
  updateUser,
  authentification,
  validationPassword,
  jwtGuard,
} = require("../controllers/userController");
const routerUser = express.Router();
routerUser.get("", getAllUsers);
// routerUser.get("/valid",jwtGuard, validationPassword);
routerUser.get("/:id", getOneUser);
routerUser.delete("/:id", deleteUser);
routerUser.post("", createUser);
// routerUser.post("/auth", authentification);
routerUser.put("/:id", updateUser);

module.exports = routerUser;
