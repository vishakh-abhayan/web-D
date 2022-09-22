const express = require("express");
const path = require("path");

const app = express();
app.use((req, res, next) => {
  console.log("start...");
  next();
});

app.get("/login", (req, res, next) => {
  res.sendFile(path.join(__dirname, "login.html"));
  console.log("middle");
  next();
});
app.use((req, res) => {
  console.log("end...");
});
app.post("/login", (req, res) => {
  res.send("login sucessfully");
});
app.get("/", (req, res) => {
  res.send("welocom world!");
});

app.listen(8000, () => console.log("server started............"));
