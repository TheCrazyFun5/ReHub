const nodemailer = require("nodemailer");
// Создайте объект транспорта для отправки писем
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "postify708@gmail.com",
    pass: "wjyr pxum zafl ytnr",
  },
});
// Параметры электронного письма
// let mailOptions = {
//   from: '"GG" <maddison53@ethereal.email>', // От кого
//   to: "ni22811@mail.ru", // Кому
//   subject: "Тестовое письмо", // Тема письма
//   text: "Привет, это тестовое письмо!", // Текст письма
//   html: "<b>Hello world?</b>"
// };
// Отправка письма
function send_message(infoMSG) {
  transporter.sendMail(infoMSG, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      //console.log("Email sent: " + info.response);
    }
  });
}

module.exports.send_msg = send_message;
