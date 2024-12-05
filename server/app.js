const express = require("express");
const path = require("path");
const cors = require("cors");
const router = require("./Router/index");
const app = express();

app.use(cors({ origin: "*" }));
app.use(router);

// Раздача статических файлов из папки Public
// app.use(express.static(path.join(__dirname, "Public")));

// Маршрутизация: отправка index.html для всех запросов

// Запуск сервера
const PORT = process.env.PORT || 3000;
const host = "127.0.0.1";
app.listen(PORT, host, () => {
  console.log(`http://${host}:${PORT}`);
});
