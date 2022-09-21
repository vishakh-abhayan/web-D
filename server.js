let http = require("http");
let fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.url == "/") {
      fs.readFile("index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (req.url == "/login") {
      fs.readFile("login.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("error");
      res.end();
    }
  })
  .listen(3000, () => console.log("server runing..........."));

// function (req, res) {
//   res.write("User Found!");
//   res.end();
// }
