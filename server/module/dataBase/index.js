const Sequelize = require("sequelize");

//данные для БД
const database = "sql7750517";
const username = "sql7750517";
const password = "aDF4jw9zeR";
const host = "sql7.freemysqlhosting.net";
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
