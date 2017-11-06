const UserModel = require('../models/usersModel');
const Promise = require('promise');
const bcrypt = require('bcrypt');
const { auth } = require('../cfg/config');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

module.exports = {
  passwordAuthentication: (userId, password) => {
    return new Promise((resolve, reject) => {
      UserModel.findById(userId, { password: 1 }, (err, user) => {
        bcrypt.compare(password, user.password, (bcErr, bcRes) => {
          if (bcRes) {
            const token = jwt.sign({ _id: user._id }, auth.secret, { algorithm: auth.algorithm });
            resolve(token);
          } else {
            reject({ status: 401, message: 'Password does not match' })
          }
        });
      });
    });
  },

  getUserByToken(req, res, next) {
    const token = req.headers['x-access-token'];
    // No authentication possible if token does not exist
    if (!token) {
      return res.status(401).send();
    }

    // decode token
    jwt.verify(token, auth.secret, { algorithm: auth.algorithm }, (err, decoded) => {
      if (err) {
        return res.status(401).send({ error: 'Invalid auth token, please reauthenticate.' });
      }

      // cache token
      req.decoded = decoded;

      const tokenUserId = get(req, 'decoded._id');

      // find & cache user
      UserModel.findOne({ _id: tokenUserId }, (findErr, foundUser) => {
        if (findErr) return res.status(500).send({ error: 'Error accessing database.' });

        if (!foundUser) return res.status(404).send({ error: 'User not found' });

        req.foundUser = foundUser;

        return next();
      });
    });
  },
};