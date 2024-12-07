const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");
const api = express.Router();
const user = require("./../module/user");
const news = require("./../module/news");
const chats = require("./../module/chats");
const accounting = require("./../module/accounting");

api.use("/authenticateToken", (req, res) => {
  const SECRET_Key = "access_secret";
  const token = req.cookies.token;
  if (!token) return res.status(200).json({ isToken: false });
  jwt.verify(token, SECRET_Key, (error, userToken) => {
    if (error) {
      res.clearCookie("token");
      return res.status(200).json({ isToken: false });
    }
    return res.status(200).json({ isToken: true });
  });
});

api.use("/user", user);
api.use("/news", news);
api.use("/chats", chats);
api.use("/accounting", accounting);

api.use("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "Public", "index.html"));
});

module.exports = api;
