const User = require('../models/users.model.js')

class UserRepositories{
    register(body){
        return User.create(body)
    }

    login(username){
        return User.findOne({username}).select("+password")
    }

    refresh(id){
        return User.findById(id)
    }
}

module.exports = UserRepositories