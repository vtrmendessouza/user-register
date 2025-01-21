const connection = require("../config/database");
const UserRepository = require("./user-repository");

class UserRepositoryMysql extends UserRepository{
    async create(user){
        const result = await connection.query(`
            insert into users values (
        	null, '${user.name}', '${user.cpf}'
            );
        `);
        const id = result[0];
        return id;
    }
}

module.exports = UserRepositoryMysql;
