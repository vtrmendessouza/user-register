const UserRepository = require("../repository/user-repository");
const userRepository = new UserRepository();

class RegisterUserUseCase{
    execute(data){
        this.validateData(data);

        userRepository.create(data);
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
