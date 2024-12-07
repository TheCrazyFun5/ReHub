const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "sessions",
    {
      id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true },
      token: { type: Sequelize.STRING, allowNull: false },
    },
    {
      timestamps: false,
      tableName: "sessions",
    }
  );
};
