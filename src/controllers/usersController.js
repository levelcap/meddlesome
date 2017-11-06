const { get } = require('lodash');
const usersService = require('../services/usersService');

const allUsers = [
  {
    name: 'First User',
    email: 'firstuser@gmail.com',
  },
  {
    name: 'Second User',
    email: 'seconduser@gmail.com',
  },
];

module.exports = {
  currentUser: (req, res) => {
    return res.status(200).json(allUsers[0]);
  },

  createUser: (req, res) => {
    usersService.createUser(req.body).then((successUser) => {
      return res.status(200).json(successUser);
    }, (error) => {
      return res.status(500).json({ error });
    });
  },

  updateUser: (req, res) => {
    const userId = get(req, 'params.id');
    console.log(userId);

    usersService.updateUser(req.body).then((successUser) => {
      return res.status(200).json(successUser);
    }, (error) => {
      return res.status(500).json({ error });
    });
  },
  search: (req, res) => {
    const searchTerm = get(req, 'params.term');
    console.log(searchTerm);
    return res.status(200).json(allUsers);
  },

  getUser: (req, res) => {
    const userId = get(req, 'params.id');
    console.log(userId);
    return res.status(200).json(allUsers[1]);
  },
};