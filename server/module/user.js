const express = require("express");
const sequelize = require("sequelize");
const bd = require("./dataBase");
const jwt = require("jsonwebtoken");
const user = express.Router();

const SECRET_Key = "access_secret";

user.use("/loginIn", async function (req, res) {
  try {
    const data = req.body;
    if (data.login === "123456" && data.password === "123456789") {
      const Token = jwt.sign({ id: 0 }, SECRET_Key, { expiresIn: "15m" });
      res.cookie("token", Token, { httpOnly: true, sameSite: "strict" });
      res.status(200).json({ success: true });
    } else {
      res.status(200).json({ error: "Неверный логин или пароль" });
    }
  } catch (error) {
    console.log(`Error: [module-user] ${error}`);
  }
});

user.use("/ddd", (req, res) => {
  res.status(200).json(`Ok ${req.ddddd}`);

  console.log(req.ddddd);
});

module.exports = user;
