const router = require("express").Router();

router.get("/", async (req, res, next) => {
  res.json("sending on base route");
});

router.use(function (req, res, next) {
  const err = new Error("Route not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
