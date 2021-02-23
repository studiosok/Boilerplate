const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "./public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require("./apiRoutes"));

app.all("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public"));
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});