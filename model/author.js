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
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    occupation: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    company: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    twitter: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    linkedin: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    github: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    layout: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

// Sync the model with the database
// This will create the table (if it doesn't exist) based on the model definition
Users.sync()
  .then(() => {
    console.log('Users table created');
  })
  .catch((error) => {
    console.error('Error creating Users table:', error);
  });

module.exports = Users;
