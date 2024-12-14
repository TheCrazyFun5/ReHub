const express = require("express");
const sequelize = require("sequelize");
const bd = require("./dataBase");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mail = require("./mainl");
const user = express.Router();

require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY_TOKEN;

user.use("/loginIn", async function (req, res) {
  try {
    const data = req.body;
    const userSearch = await bd.users.findAll({ where: { Login: data.login } });
    if (userSearch.length >= 1) {
      const user = userSearch[0].dataValues;
      if (bcrypt.compareSync(data.password, user.Password)) {
        const Token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "30m" });
        res.cookie("token", Token, { httpOnly: true, sameSite: "strict" });
        res.status(200).json({ success: true });
      } else return res.status(200).json({ error: "Неверный логин или пароль" });
    } else return res.status(200).json({ error: "Неверный логин или пароль" });
  } catch (error) {
    console.log(`Error: [module-user] ${error}`);
  }
});

user.use("/logout", async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json();
  } catch (error) {
    res.status(200).json("error");
    console.log(`Error: [module-user] ${error}`);
  }
});

user.use("/getMiniProfile", async (req, res) => {
  try {
    const user = await bd.users.findOne({ where: { id: req.userId } });
    res.status(200).json({
      nameAndFirstName: `${user.dataValues.Name} ${user.dataValues.Surname}`,
      profilePictureHref: `http://${req.hostname}:${process.env.PORT}${user.dataValues.Logo_src}`,
    });
  } catch (error) {
    res.status(200).json("error");
    console.log(`Error: [module-user] ${error}`);
  }
});
user.use("/IT", async (req, res) => {
  try {
    const user = await bd.users.findOne({ where: { id: req.userId } });
    let mailOptions = {
      from: '"ReHub" <maddison53@ethereal.email>', // От кого
      to: process.env.MAIL_ADMIN, // Кому
      subject: "Обращение в IT-отдел", // Тема письма
      text: `ID: ${req.userId}\nФИО: ${user.dataValues.Surname} ${user.dataValues.Name} ${user.dataValues.Patronymic}\nОбращение: ${req.body.data}`, // Текст письма
    };
    await mail.send_msg(mailOptions);
    res.status(200).json("Письмо отправлено");
  } catch (error) {
    res.status(200).json(error);
  }
});

module.exports = user;
