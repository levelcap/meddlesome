const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { values } = require('lodash');
const { roles } = require('./enums/usersEnums');
const uuid = require('uuid/v1');
const random = require('../utils/random');

const usersSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  phone: String,
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
  meddlers: [String],
  meddles: [
    {
      title: String,
      userId: Schema.ObjectId,
    }
  ],
  verifications: {
    phone: {
      token: {
        type: String,
        default: random.phoneToken(),
      },
      tokenDate: Date,
      verified: {
        type: Boolean,
        default: false,
      },
    },
    email: {
      token: {
        type: String,
        default: uuid(),
      },
      tokenDate: Date,
      verified: {
        type: Boolean,
        default: false,
      },
    },
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