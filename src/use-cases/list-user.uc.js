const UserRepository = require("../repository/user-repository-mysql");
const userRepository = new UserRepository();

class ListUserUseCase{
    async execute(){
        const users = await userRepository.getAll();
        return users[0];
    }
};

module.exports = ListUserUseCase;
