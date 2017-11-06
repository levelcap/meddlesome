require('dotenv').config({ silent: true });

module.exports = {
  database: {
    url: process.env.MONGO_URL,
  },
  auth: {
    secret: process.env.SECRET_KEY,
    algorithm: process.env.SIGNING_ALGORITHM || 'HS256',
  }
};