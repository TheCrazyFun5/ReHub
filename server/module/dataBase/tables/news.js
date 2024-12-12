const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "News",
    {
      id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true },
      MiniContent: { type: Sequelize.TEXT, allowNull: false },
      MaxContent: { type: Sequelize.TEXT, allowNull: false },
      Header: { type: Sequelize.STRING, allowNull: false },
      DatePublication: { type: Sequelize.STRING, allowNull: false },
    },
    {
      timestamps: false,
      tableName: "News",
    }
  );
};
