const express = require("express");
const path = require("path");
const api = require("./api");
const jwt = require("jsonwebtoken");
const router = express.Router();

require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY_TOKEN;

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;
  if (req.originalUrl === "/api/user/loginIn") return next();
  if (req.originalUrl === "/api/authenticateToken") return next();
  if (!token) return res.redirect("/");
  jwt.verify(token, SECRET_KEY, (error, userToken) => {
    if (error) {
      res.clearCookie("token");
      return res.redirect("/");
    }
    req.userId = userToken.id;
    const Token = jwt.sign({ id: userToken.id }, SECRET_KEY, { expiresIn: "30m" });
    res.cookie("token", Token, { httpOnly: true, sameSite: "strict" });
    next();
  });
};

router.use("/api", authenticateToken, api);
router.use("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "Public", "index.html"));
});

module.exports = router;
