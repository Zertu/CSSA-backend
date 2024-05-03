const sequelize = require('./sequelize');
const { DataTypes } = require('sequelize');
const Tags = sequelize.define(
  'Tags',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tag_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Tags;
