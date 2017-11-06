require('dotenv').config({ silent: true });

module.exports = {
  database: {
    url: process.env.MONGO_URL,
  },
};