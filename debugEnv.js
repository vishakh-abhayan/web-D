const express = require("express");
const app = express();

app.get("/", Token, Validation, (req, res) => {
  console.log("user loged.......");
  res.send("<h1>Hey Vishakh </h1>");
  console.log("end.......");
});

function Token(req, res, next) {
  console.log("token creating.........");
  setInterval(() => {
    const TOKEN = "123";
    req.token = TOKEN;
    next();
  }, 4000);
}

function Validation(req, res, next) {
  if (req.token) {
    console.log("token approved.......");
    next();
  }
}

// app.get("*", (req, res) => {
//   res.status(404).send("<h1> 404 </h1>");
// });

const Port = process.env.Port || 3000;

app.listen(Port, console.log(`server is running on ${Port}`));
