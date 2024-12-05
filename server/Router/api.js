const express = require("express");
const api = express.Router();
const user = require("./../module/user");
const news = require("./../module/news");
const chats = require("./../module/chats");
const accounting = require("./../module/accounting");

api.use("/user", user);
api.use("/news", news);
api.use("/chats", chats);
api.use("/accounting", accounting);

module.exports = api;
