const {body} = require('express-validator')

const requestBody = [
    body("expiry_date").custom(value => {
        const now = new Date()
        const expire = new Date(value)

        if (isNaN(expire.getTime()) || expire < now){
            throw new Error("Expiry date must be in the future")
        }

        return true
    })
]

module.exports = requestBody