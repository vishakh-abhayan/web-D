const express = require("express");
const path = require("path");

const app = express();

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});
app.post("/login", (req, res) => {
  res.send("login sucessfully");
});
app.get("/", (req, res) => {
  res.send("welocom world!");
});

app.listen(8000, () => console.log("server started............"));
