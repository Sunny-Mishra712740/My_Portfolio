const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();

// mongoose.connect("url")
// const db = mongoose.connection
// db.on("error", () => {
//     console.log("Error while connecting to the mongoDB")
// })
// db.once("open", () => {
//     console.log("Connected to MongoDB")
// })


const PORT = process.env.PORT || 7777
console.log(process.env.PORT)
app.listen(PORT, () => {
    console.log(`Server is listening to the port num : ${PORT}`)
})
