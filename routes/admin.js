const express = require("express");
const path = require("path");

const router = express.Router();

const rootDir = require("../utils/path");

// /admin/add-product  =>GET
router.get("/add-product", (req, res, next) => {
  console.log("In the /add-product");
  //   res.send(
  //     "<form action='/admin/product' method='POST'><input type='text' name='title'/><button type='submit'>add product</button></form>"
  //   );
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/product  =>POST
router.post("/product", (req, res, next) => {
  console.log(req.body);
  return res.redirect("/");
});

module.exports = router;
