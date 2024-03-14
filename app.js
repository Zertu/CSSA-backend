const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: 'username',
  host: process.env.host,
  database: 'default_database',
  password: 'password',
  port: '5432'
});

const app = express();

app.use(express.json());

// 路由示例：获取所有文章
app.get('/articles', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM articles');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// 路由示例：创建新文章
app.post('/articles', async (req, res) => {
  const { title, date, tags, lastmod, draft, summary, images, authors, layout, bibliography, canonicalUrl } = req.body;
  try {
    await pool.query(
      'INSERT INTO articles (title, date, tags, lastmod, draft, summary, images, authors, layout, bibliography, canonicalUrl) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
      [title, date, tags, lastmod, draft, summary, images, authors, layout, bibliography, canonicalUrl]
    );
    res.status(201).json({ message: 'Article created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// 运行服务器
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
