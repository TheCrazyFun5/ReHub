module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Адрес вашего бэкенда (Node.js или другой сервер)
        changeOrigin: true, // Меняет заголовок Origin в запросах, чтобы избежать ошибок CORS
        pathRewrite: { "^/api": "" }, // Переписывает путь, удаляя префикс '/api' перед отправкой запроса
      },
    },
  },
};
