const http = require("http");

const server = http.createServer(function (request, response) {
  response.write("Now we will take a break");
  response.end();
});

server.listen(3001, function () {
  console.log("Server is running on port 3001");
});
