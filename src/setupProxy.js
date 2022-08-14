const { createProxyMiddleware } = require("http-proxy-middleware");

const {
  SERVER: { API_SERVER },
} = require("./config/env/index");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: API_SERVER,
      changeOrigin: true,
      pathRewrite: {
        "^/api/": "/",
      },
    })
  );
};
