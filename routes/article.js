const { articles } = require('../model/articles');
const express = require('express');
const router = express.Router();

router.get('/articles', async (req, res, next) => {
  try {
    const article = await articles.findAll();
    console.log(article);
    res.json(article);
  } catch (error) {
    next(error); // 将错误传递给全局错误处理中间件
  }
});

router.get('/articles/:id', async (req, res) => {
  const articleId = req.params.id;
  try {
    const author = await articles.findByPk(articleId);
    if (author) {
      res.json(author);
    } else {
      res.status(404).json({ error: 'Article not found' });
    }
  } catch (error) {
    console.error('Error getting author:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/articles', async (req, res, next) => {
  const date = new Date();
  const lastmod = new Date();
  const bibliography = '';
  const authors = ['admin'];
  const layout = '';
  const maxIndexArticle = await articles.findOne({
    order: [['article_index', 'DESC']],
  });
  const article_index = maxIndexArticle ? maxIndexArticle.article_index + 1 : 1;
  const { title, tags, draft, summary, images, content } = req.body;
  try {
    const article = await articles.create({
      title,
      date,
      tags,
      lastmod,
      draft,
      summary,
      images,
      authors,
      layout,
      bibliography,
      content,
      article_index,
    });
    console.log(res);
    res.status(201).json({ message: 'articles created successfully', article });
  } catch (error) {
    next(error);
  }
});

router.put('/articles/:id', async (req, res, next) => {
  const { id } = req.params;
  const { title, date, tags, lastmod, draft, summary, images, authors, layout, bibliography, canonicalurl } = req.body;
  try {
    const article = await articles.findByPk(id);
    if (!article) {
      return res.status(404).json({ error: 'articles not found' });
    }
    article.title = title;
    article.date = date;
    article.tags = tags;
    article.lastmod = lastmod;
    article.draft = draft;
    article.summary = summary;
    article.images = images;
    article.authors = authors;
    article.layout = layout;
    article.bibliography = bibliography;
    article.canonicalurl = canonicalurl;
    await article.save();
    res.json({ message: 'articles updated successfully', article });
  } catch (error) {
    next(error);
  }
});

router.delete('/articles/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const article = await articles.findByPk(id);
    if (!article) {
      return res.status(404).json({ error: 'articles not found' });
    }
    await article.destroy();
    res.json({ message: 'articles deleted successfully' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
