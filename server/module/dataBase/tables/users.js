const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "Users",
    {
      id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true },
      Login: { type: Sequelize.STRING, allowNull: false },
      Password: { type: Sequelize.STRING, allowNull: false },
      Mail: { type: Sequelize.STRING, allowNull: false },
      Name: { type: Sequelize.STRING, allowNull: false },
      Surname: { type: Sequelize.STRING, allowNull: false },
      Patronymic: { type: Sequelize.STRING, allowNull: false },
      Phone: { type: Sequelize.STRING, allowNull: false },
      Logo_src: { type: Sequelize.STRING, allowNull: false, defaultValue: "/content/default/default_user_ico.png" },
      Visits_last: { type: Sequelize.DATE, allowNull: true },
      Rang: { type: Sequelize.STRING, allowNull: false, defaultValue: "defaultUser" },
    },
    {
      timestamps: false,
      tableName: "Users",
    }
  );
};
