const RegisterUserUseCase = require ("../use-cases/register-user.uc");
const registerUserUseCase = new RegisterUserUseCase();

class RegisterUserController{
    handle(request, response){
        try{
            const data = request.body;
            registerUserUseCase.execute(data);
            return response.json({
                ok: true
            })
        }catch(error){
            return response.status(400).json({
                ok: false, error: error.message
            })
        }
    }
}

module.exports = RegisterUserController;
