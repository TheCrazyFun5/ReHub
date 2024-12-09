const sequelize = require("sequelize");
const bd = require("./../dataBase");
const time = require("./../time");

async function addNews(dataNews) {
  //   try {
  //     await bd.news.create({
  //       MiniContent: dataNews.MiniContent,
  //       MaxContent: dataNews.MaxContent,
  //       Header: dataNews.Header,
  //       DatePublication: dataUser.name,
  //     });
  //   } catch (error) {
  //     console.log(`[Server-AddUser]: произошла ошибка \n${error}`);
  //   }
}

// addNews(data);
console.log(time.fullObject());
console.log(time.time());
console.log(time.date());
