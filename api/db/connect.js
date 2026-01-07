const path = require('path')

require('dotenv').config({
    path: path.resolve(__dirname, '../environment/.env.development')
})
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.error('MongoDB connection failed: ', error)
        throw error
    }
}

module.exports = connectDB