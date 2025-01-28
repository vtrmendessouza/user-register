const connection = require("../config/database");
const UserRepository = require("./user-repository");

class UserRepositoryMysql extends UserRepository{
    async create(user){
        const result = await connection.query(`
            insert into users values (
        	null, '${user.nome}', '${user.idade}', '${user.cpf}', '${user.rg}', '${user.data_nasc}'
                , '${user.sexo}', '${user.signo}', '${user.mae}', '${user.pai}', '${user.email}'
                , '${user.senha}', '${user.cep}', '${user.endereco}', '${user.numero}', '${user.bairro}'
                , '${user.cidade}', '${user.estado}', '${user.telefone_fixo}', '${user.celular}'
                , '${user.altura}', '${user.peso}', '${user.tipo_sanguineo}', '${user.cor}'
            );
        `);
        const id = result[0];
        return id;
    }
}

module.exports = UserRepositoryMysql;
