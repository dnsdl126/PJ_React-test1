const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            // node 서버에 설정해둔 port 번호 4000 번
            target: 'http://localhost:4000',
            changeOrigin: true,
        })
    );
};