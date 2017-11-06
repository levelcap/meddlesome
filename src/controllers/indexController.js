const listing = {
  listing: '/',
  users: '/users',
};

module.exports = {
  listing: (req, res) => {
    return res.status(200).json(listing);
  },
};