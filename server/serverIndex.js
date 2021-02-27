const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./db.js");

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../dist")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require("./apiRoutes"));

// app.get("/dist/bundle.js", function (req, res) {
//   res.sendFile(path.join(__dirname, "../dist/bundle.js"));
// });

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "../dist/index.html"));
// });

app.get("/", function (req, res) {
  res.send(path.join(__dirname, "../dist"));
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

const port = process.env.PORT || 3000;

db.sync().then(function () {
  app.listen(port, function () {
    console.log(`listening on port ${port}`);
  });
});
