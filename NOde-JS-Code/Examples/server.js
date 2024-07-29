// import
const http = require("http");

// create server
let server = http.createServer(function (request, response) {
  response.write(" This is my 1st Node server Program");
  response.end();
});

// add a port number
server.listen(3001, function () {
  console.log("Your server is running on port 3001");
});
