const UserRepositoriesClass = require('../repositories/authentication.repositories.js')
const UserRepositoriesInstance = new UserRepositoriesClass()

const {generateAccessToken, generateRefreshToken} = require('../../utils/generate_token.js')
const jwt = require('jsonwebtoken')
const logger = require('../../utils/logger.js')

class UserService{
    async register(body){
        let assignedRole = body.role ? body.role : "user"
        const data = {... body, role: assignedRole}
        const user = await UserRepositoriesInstance.register(data)
        const access_token = generateAccessToken(user)
        const refresh_token = generateRefreshToken(user)
    }

    async 
}

module.exports = UserService