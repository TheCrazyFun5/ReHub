const express = require("express");
const bd = require("./dataBase");
const news = express.Router();

news.use("/getNews", async (req, res) => {
  try {
    const BDnews = await bd.news.findAll();
    const news = [];
    BDnews.forEach((element) => {
      const tempData = element.dataValues;
      news.push({
        title: tempData.Header,
        date: tempData.DatePublication,
        minText: tempData.MiniContent,
        maxText: tempData.MaxContent,
      });
    });
    res.status(200).json(news);
  } catch (error) {
    console.log(`[Server-getNews]: произошла ошибка \n${error}`);
  }
});

module.exports = news;
