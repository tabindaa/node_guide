const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");

const routes = express.Router();

routes.get("/", (req, res, next) => {
  console.log("In  shop routes");

  //   res.send("<h1>Hello Express</h1>");
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = routes;
