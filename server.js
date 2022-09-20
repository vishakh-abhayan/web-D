let http = require("http");
let fs = require("fs");

http
  .createServer(function (req, res) {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(3000);

// function (req, res) {
//   res.write("User Found!");
//   res.end();
// }
