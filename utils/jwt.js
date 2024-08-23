const { expressjwt } = require('express-jwt');
const secret = 'rqwtrwqrdfasdf';
const jwt = expressjwt({
  secret: 'rqwtrwqrdfasdf',
  algorithms: ['HS256'],
}).unless(function (req) {
  return req.url.includes('login');
});

module.exports = {
  jwt,
  secret,
};
