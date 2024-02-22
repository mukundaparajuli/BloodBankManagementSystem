const mongoose = require("mongoose");


const databaseConnection = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Conencted to the database successfully")
        console.log(connect.connection.host);
        console.log(connect.connection.name)
    } catch (error) {
        console.log("Connection to the database could not be made: ", error);
    }
}

module.exports = databaseConnection;