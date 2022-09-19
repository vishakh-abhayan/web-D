let http = require("http");

http.createServer(hey).listen(3000);

function hey(req, res) {
  res.write("User Found!");
  res.end();
}
