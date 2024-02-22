const express = require("express");
const dotenv = require("dotenv").config();
const databaseConnection = require("./config/dbConnection");
const app = express();
const port = process.env.PORT||5001;

app.use(express.json());
databaseConnection();
app.use("/", require("./router/userRoute"))

app.listen(port, (req, res) => {
    console.log(`listening to the port ${port}`)
})