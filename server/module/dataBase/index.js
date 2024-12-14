const Sequelize = require("sequelize");

//данные для БД
const database = "ReHub";
const username = "root";
const password = "";
const host = "127.0.0.1";
const dialect = "mysql";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  logging: false,
});

//tables
const sessions = require("./tables/sessions")(sequelize);
const users = require("./tables/users")(sequelize);
const news = require("./tables/news")(sequelize);

async function connectToDB() {
  try {
    await sequelize.authenticate();
    console.log("Соединение с БД было успешно установлено.");
    await sequelize.sync({ alter: true });
    console.log("Все модели в БД были успешно синхронизированы.");
  } catch (e) {
    console.log("Невозможно выполнить подключение к БД.");
    process.exit();
  }
}
connectToDB();

module.exports = {
  sequelize: sequelize,
  sessions: sessions,
  users: users,
  news: news,
};
