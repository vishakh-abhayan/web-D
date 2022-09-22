const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Helllo world!...."));

app.listen(8000, () => console.log("server started............"));
