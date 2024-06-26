const sequelize = require('./sequelize');
const { DataTypes } = require('sequelize');
const Articles = sequelize.define('articles', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  draft: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  summary: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  authors: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  layout: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bibliography: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  article_index: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
  },
});
module.exports = {
  articles: Articles,
};
