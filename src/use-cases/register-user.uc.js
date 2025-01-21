const UserRepository = require("../repository/user-repository-mysql");
const userRepository = new UserRepository();

class RegisterUserUseCase{
    async execute(data){
        this.validateData(data);
        const id = await userRepository.create(data);
        return id;
    }
    validateData(data){
        if (data.name.length < 3){
            throw new Error("Nome Inválido.")
        }
        if (data.age <= 0 || data.age > 120){
            throw new Error("Idade Inválida.")
        }
    }
}

module.exports = RegisterUserUseCase;
