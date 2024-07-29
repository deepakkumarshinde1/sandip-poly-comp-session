const { response } = require("express");

const routes = require("express").Router();

routes.get("/", function (request, response) {
  response.render("index", {
    title: "Home Page",
  });
});

routes.get("/about-us", function (request, response) {
  response.send("About us");
});

routes.get("/our-team", function (request, response) {
  response.render("team");
});
module.exports = routes;
