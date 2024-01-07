const mongoose = require('mongoose')

const connection = async() =>{
    try {
        await mongoose.connect(process.env.DB)
        console.log("Connected to MongoDB succesfully.")
    } catch (error) {
        console.error("Error connectig to MongoDB.", error.message)
    }
}

module.exports = connection;