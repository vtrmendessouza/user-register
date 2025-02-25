const ListUserUseCase = require ("../use-cases/list-user.uc");
const listUserUseCase = new ListUserUseCase();

class ListUserController{
    async handle(request, response){
        const users = await listUserUseCase.execute()
        return response.json({ok: true, users})
    }
};

module.exports = ListUserController;