const RegisterUserUseCase = require ("../use-cases/register-user.uc");
const registerUserUseCase = new RegisterUserUseCase();

class RegisterUserController{
    async handle(request, response){
        try{
            const data = request.body;
            console.log(data);
            const id = await registerUserUseCase.execute(data);
            return response.status(201).json({
                ok: true, id //id: 'const id'
            })
        }catch(error){
            return response.status(400).json({
                ok: false, error: error.message
            })
        }
    }
}

module.exports = RegisterUserController;
