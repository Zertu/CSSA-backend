const sequelize = require('./sequelize');
const { DataTypes } = require('sequelize');
const Users = sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(255),
      validate: { isEmail: true },
    },
    emailConfirmed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    name: {
      type: DataTypes.STRING(50),
      primaryKey: true,
    },
    key: {
      type: DataTypes.STRING(100),
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    displayName: {
      type: DataTypes.STRING(100),
    },
    picture: {
      type: DataTypes.STRING(255),
    },
    gender: {
      type: DataTypes.STRING(50),
    },
    location: {
      type: DataTypes.STRING(100),
    },
    website: {
      type: DataTypes.STRING(255),
    },
    password: {
      type: DataTypes.STRING(255),
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Users;
