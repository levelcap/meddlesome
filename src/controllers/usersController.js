const { get } = require('lodash');

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