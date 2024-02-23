const express = require("express");
const dotenv = require("dotenv").config();
const databaseConnection = require("./config/dbConnection");
const app = express();
const port = process.env.PORT || 5001;
const asyncHandler = require("express-async-handler")

app.use(express.json());
databaseConnection();
app.use("/api/", require("./router/userRoute"));
app.use("/api/", require("./router/bloodRequestRoute.js"))

app.listen(port, (req, res) => {
    console.log(`listening to the port ${port}`)
})