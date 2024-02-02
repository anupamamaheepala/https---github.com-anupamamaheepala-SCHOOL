const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    /*useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopologyl: true,
    useFindAndModify: false*/
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongodb Connection success!");
})

const studentRouter = require("./routes/students.js");

http://localhost:8070/student

app.use("/student", studentRouter);

app.listen(PORT, () => {
    console.log('server is up and running on port number: ${PORT}')
})
