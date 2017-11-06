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
    select: false,
  },
  createdAt: {
    type: Date,
    select: false,
  },
  updatedAt: {
    type: Date,
    select: false,
  },
}, {
  collection: 'users',
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('usersModel', usersSchema);