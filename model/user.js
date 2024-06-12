const sequelize = require('./sequelize');
const { DataTypes } = require('sequelize');
const Users = sequelize.define('users', {
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
  displayName: {
    type: DataTypes.STRING(100),
  },
  avatar: {
    type: DataTypes.STRING(255),
  },
  gender: {
    type: DataTypes.STRING(50),
  },
  last_login: {
    type: DataTypes.STRING(100),
  },
  membershipId: {
    type: DataTypes.STRING(100),
  },
  authority: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
  },
});

module.exports = Users;
