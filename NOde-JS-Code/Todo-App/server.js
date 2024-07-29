const express = require("express");
const routes = require("./routes");

// create a server
const server = express();

server.use(express.static("public"));

server.set("views", "./views");
server.set("view engine", "ejs");

// add a routing
server.use("/", routes);

// port
server.listen(3001, function () {
  console.log("Server is running on port 3001");
});
