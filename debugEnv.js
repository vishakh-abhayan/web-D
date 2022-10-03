const express = require("express");
const app = express();

app.get("/", Token, (req, res) => {
  console.log("user loged.......");
  res.send("<h1>Hey Vishakh </h1>");
  console.log("end.......");
});

function Token(req, res, next) {
  console.log("start.......");
  console.log("token created.........");
  next();
}

app.get("*", (req, res) => {
  res.status(404).send("<h1> 404 </h1>");
});

const Port = process.env.Port || 3000;

app.listen(Port, console.log(`server is running on ${Port}`));
