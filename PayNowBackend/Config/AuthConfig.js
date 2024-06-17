
require("dotenv").config({
  path: process.env.NODE_ENV === 'production' ? './production.env' : './development.env'
});

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_SECRET_EXPIRATION: process.env.JWT_SECRET_EXPIRATION,
  PORT: process.env.PORT
}