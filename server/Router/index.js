const express = require("express");
const path = require("path");
const api = require("./api");
const jwt = require("jsonwebtoken");
const router = express.Router();
const SECRET_Key = "access_secret";

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;
  if (req.originalUrl === "/api/user/loginIn") return next();
  if (req.originalUrl === "/api/authenticateToken") return next();
  if (!token) return res.redirect("/");
  jwt.verify(token, SECRET_Key, (error, userToken) => {
    if (error) {
      res.clearCookie("token");
      return res.redirect("/");
    }
    req.ddddd = userToken;
    next();
  });
};

router.use("/api", authenticateToken, api);
router.use("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "Public", "index.html"));
});

module.exports = router;
