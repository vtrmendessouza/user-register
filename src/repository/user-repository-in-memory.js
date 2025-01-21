const UserRepository = require("./user-repository");

const database = [];

class UserRepositoryInMemory extends UserRepository {
    create(user){
        database.push(user);
        console.log(database);
    }
}

module.exports = UserRepositoryInMemory;
