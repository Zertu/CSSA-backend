const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: 'cssa',
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  define: {
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});
// 定义文章模型
const Articles = sequelize.define('articles', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdat: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  updatedat: {
    type: DataTypes.DATE,
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
    type: DataTypes.JSONB,
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
  canonical_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = {
  articles: Articles,
};
