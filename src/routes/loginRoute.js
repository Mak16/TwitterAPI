const express = require("express");
const { login } = require("../controllers/loginController");
const routerLogin = express.Router();


routerUser.post("/login", login);
