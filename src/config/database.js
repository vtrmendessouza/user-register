const {Sequelize} = require("sequelize");
const connection = new Sequelize({database:"user_register", host:"localhost", 
                                port:3306, password:"12345678", username: "root", dialect: "mysql"});
   
    connection.query("show tables").then(() => {
        console.log("conexao mysql ok");
    }).catch((error) => {
        console.log("conexao mysql nok");
        console.log(error);
    });
    module.exports = connection;
