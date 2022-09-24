const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hey Vishakh </h1>");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1> 404 </h1>");
});

const Port = process.env.Port || 3000;

app.listen(Port, console.log(`server is running on ${Port}`));
