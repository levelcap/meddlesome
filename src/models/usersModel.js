const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { values } = require('lodash');
const { roles } = require('./enums/usersEnums');

const usersSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: roles.DATER,
    enum: values(roles),
  },
  password: {
    type: String,
    required: true,
  },
}, {
  collection: 'users',
  timestamps: true,
});

module.exports = mongoose.model('usersModel', usersSchema);