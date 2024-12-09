const sequelize = require("sequelize");
const { Op } = require("sequelize");
const bd = require("./../dataBase");
const bcrypt = require("bcryptjs");
//
//
//
//
//
//
//----------------------------Данные пользователя------------------------
const data = {
  login: "Vimer",
  password: "159159",
  mail: "ni22811@mail",
  name: "Михаил",
  surname: "Конопкин",
  patronymic: "Олегович",
  phone: "85285555555",
};
//------------------------------------------------------------------------
//
//
//
//
//
//
//
//
//
async function addUser(dataUser) {
  try {
    const userSearch = await bd.user.findAll({
      where: { [Op.or]: [{ Login: dataUser.login }, { Mail: dataUser.mail }] },
    });
    if (userSearch.length === 0) {
      try {
        let hashPassword = bcrypt.hashSync(dataUser.password, 10);
        await bd.user.create({
          Login: dataUser.login,
          Password: hashPassword,
          Mail: dataUser.mail,
          Name: dataUser.name,
          Surname: dataUser.surname,
          Patronymic: dataUser.patronymic,
          Phone: dataUser.phone,
        });
        console.log("[Server-AddUser]: Пользователь добавлен");
      } catch (error) {
        console.log(`[Server-AddUser]: произошла ошибка \n${error}`);
      }
    } else {
      const userBd = userSearch[0].dataValues;
      if (userBd.Login === dataUser.login)
        console.log(
          `[Server-AddUser]: Пользователь с таким логином уже есть: \nID in BD: [${userBd.id}]; login: ${userBd.Login} = ${dataUser.login}.`
        );
      if (userBd.Mail === dataUser.mail)
        console.log(
          `[Server-AddUser]: Пользователь с такой почтой уже есть: \nID in BD: [${userBd.id}]; mail: ${userBd.Mail} = ${dataUser.mail}.`
        );
    }
  } catch (error) {
    console.log(`[Server-AddUser]: произошла ошибка \n${error}`);
  }
}

addUser(data);
