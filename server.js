// function (req, res) {
//   res.write("User Found!");
//   res.end();
// }

let http = require("http");
let fs = require("fs");
let url = require("url");

http
  .createServer(function (req, res) {
    let q = url.parse(req.url);
    console.log(q.pathname);

    if (q.pathname === "/") {
      fs.readFile("index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (q.pathname === "/login") {
      fs.readFile("login.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (q.pathname === "/loginaction") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("login-sucessful.....");
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("error");
      res.end();
    }
  })
  .listen(3000, () => console.log("server runing..........."));
