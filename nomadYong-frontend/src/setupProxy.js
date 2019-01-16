const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/post', { target: 'http://localhost:5000' }));
};
