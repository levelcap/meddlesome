const UserModel = require('../models/usersModel');
const Promise = require('promise');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  createUser: (userData) => {
    return new Promise((resolve, reject) => {
      try {
        bcrypt.hash(userData.password, saltRounds, (err, passwordHash) => {
          const user = new UserModel(userData);
          user.password = passwordHash;
          user.save((saveErr, saveResult) => {
            if (saveErr) {
              reject(saveErr);
            } else {
              resolve(saveResult);
            }
          });
        });
      } catch (err) {
        reject(err);
      }
    });
  },

  updateUser: (userId, updatedUserData) => {
    return new Promise((resolve, reject) => {
      if (userData.name) {
        resolve(userData);
      } else {
        reject('User needs a name');
      }
    });
  },

  getUser: (userId) => {
    return new Promise((resolve, reject) => {
      UserModel.findById(userId, (findErr, user) => {
        if (findErr) {
          reject({ status: 500, message: findErr });
        } else {
          resolve(user);
        }
      })
    });
  },
};