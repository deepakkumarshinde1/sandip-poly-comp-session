// core module
// how to import a core module
const http = require("http");

// createsServer
let htmlCode = `
    <h1>Hello</h1>
    <h2>To Sandeep Polytechnic </h2>
`;
let server = http.createServer(function (request, response) {
  response.write(htmlCode);
  response.end();
});

server.listen(3001, function () {
  console.log("server is running on port 3001");
});

// http
// fs
// path
// os
// events
// url
