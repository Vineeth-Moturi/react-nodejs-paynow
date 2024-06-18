
require("dotenv").config({
  path: process.env.NODE_ENV === 'production' ? './production.env' : './development.env'
});

module.exports = {
  MONGODB_URL: process.env.MONGODB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_SECRET_EXPIRATION: process.env.JWT_SECRET_EXPIRATION,
  PORT: process.env.PORT,
  FRONTEND_BASE_URL: process.env.FRONTEND_BASE_URL,
  SESSION_SECRET: process.env.SESSION_SECRET
}