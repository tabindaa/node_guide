const bodyParser = require("body-parser");
const path = require("path");

const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //   res.status(404).send("<h3>Page not found</h3>");
  res
    .status(404)
    .sendFile(path.join(__dirname, "views", "page-not-found.html"));
});
app.listen(3000);
