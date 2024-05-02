const sequelize = require('./sequelize');
const { DataTypes } = require('sequelize');
const Tag = sequelize.define(
  'Tag',
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
    tableName: 'Tags',
    timestamps: false, // assuming you don't have any timestamp columns
  }
);

module.exports = Tag;
