const express = require("express");
const app = express();
// including the dotenv package for accessing the .env file
const dotenv = require("dotenv").config();
var cors = require("cors");

const port = process.env.PORT;

// including cors middleware
app.use(cors());

// predefining the url Parameter
// you can define multiple parameters this way like "/api/v1", "/api/v2" etc.
const v1 = express.Router();
app.use("/api/v1", v1);

// /login url defined. whenever when server gets a request to /login we call services/sumsiApi.js
// then it returns api token
const sumsiApi = require("./services/sumsiApi");
v1.get("/login", sumsiApi.getAuthToken);

// default example for express route
// app.get('/', (req, res) => {
//   res.send('hello')
// })

// listening the server
app.listen(port, () => {
  console.log(`Backend server is listening at http://localhost:${port}`);
});
