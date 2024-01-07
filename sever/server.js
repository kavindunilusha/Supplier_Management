//import dependancies
const express = require("express");
require("dotenv").config();
const empRouter = require("./routes/empRouter")


const connection = require('./config/db');

connection()

//initiate app using express
const app = express();

app.use(express.json())

//routings
app.use("/emp",empRouter)

const PORT = process.env.PORT || 5000

// app.get("/", (req, res) => {
//     res.json({"hello" : "world"})
// } )

app.listen(PORT,()=>{
    console.log(`Server is up and running on >> http://localhost:${PORT}`)
});








