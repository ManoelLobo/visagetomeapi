const path = require('path');

module.exports = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  user: process.env.MAIL_USER,
  pass: process.env.MAIL_PASS,
  secure: process.env.MAIL_SECURE,

  templatesPath: path.resolve('./resources/mail'),
};
