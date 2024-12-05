const express = require("express");
const path = require("path");
const api = require("./api");
const router = express.Router();

router.use("/api", api);
router.use("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "Public", "index.html"));
});

module.exports = router;
