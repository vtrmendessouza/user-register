require("./config/database");

const express = require ("express");
const app = express();
const RegisterUserController = require("./controller/register-user.controller");
const registerUserController = new RegisterUserController();
const ListUserController = require("./controller/list-user.controller");
const listUserController = new ListUserController();
const cors = require ("cors");

app.use(express.json());
app.use(cors())

app.post("/users", (request, response) => 
    registerUserController.handle(request, response));
app.get("/users", (request, response) => 
    listUserController.handle(request, response));

app.listen(3000);
