require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const registrationRoute = require("./routes/registration");
const authRoute = require("./routes/auth");

connection();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/signup", registrationRoute);
app.use("/api/auth", authRoute);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Loading from port ${port}`));