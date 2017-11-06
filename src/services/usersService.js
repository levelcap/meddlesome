const UserModel = require('../models/usersModel');
const Promise = require('promise');

module.exports = {
  createUser: (userData) => {
    return new Promise((resolve, reject) => {
      try {
        const user = new UserModel(userData);
        user.save((saveErr, saveResult) => {
          if (saveErr) {
            reject(saveErr);
          } else {
            resolve(saveResult);
          }
        });
      } catch (err) {
        reject(err);
      }
    });
  },

  updateUser: (userData) => {
    return new Promise((resolve, reject) => {
      if (userData.name) {
        resolve(userData);
      } else {
        reject('User needs a name');
      }
    });
  },
};