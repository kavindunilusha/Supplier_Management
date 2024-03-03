//import dependancies
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const empRouter = require("./routes/empRouter");

const connection = require("./config/db");
const empModel = require("./model/empModel");

connection();

//initiate app using express
const app = express();

app.use(express.json());
app.use(cors());

//routings
app.use("/emp", empRouter);

const PORT = process.env.PORT || 5000;

// app.post("/CreateUser", (req, res) => {
//   empModel
//     .create(req.body)
//     .then((User) => res.json(User))
//     .catch((err) => res.json(err));
// });

app.listen(PORT, () => {
  console.log(`Server is up and running on >> http://localhost:${PORT}`);
});
