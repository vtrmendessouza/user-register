const database = [];

class UserRepository{
    create(user){
        database.push(user);
        console.log(database);
    }
}

module.exports = UserRepository;
