require("./config/database");

const express = require ("express");
const app = express();
const RegisterUserController = require("./controller/register-user.controller");
const registerUserController = new RegisterUserController();

app.use(express.json());

app.post("/users", (request, response) => 
    registerUserController.handle(request, response));

app.listen(3000);
