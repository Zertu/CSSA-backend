const { Article } = require('../model/article');
const express = require('express');
const router = express.Router();

router.get('/articles', async (req, res, next) => {
  try {
    const articles = await Article.findAll();
    res.json(articles);
  } catch (error) {
    next(error); // 将错误传递给全局错误处理中间件
  }
});

router.post('/articles', async (req, res, next) => {
  const { title, date, tags, lastmod, draft, summary, images, authors, layout, bibliography, canonicalUrl } = req.body;
  try {
    const article = await Article.create({
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
      canonicalUrl,
    });
    res.status(201).json({ message: 'Article created successfully', article });
  } catch (error) {
    next(error);
  }
});

router.put('/articles/:id', async (req, res, next) => {
  const { id } = req.params;
  const { title, date, tags, lastmod, draft, summary, images, authors, layout, bibliography, canonicalUrl } = req.body;
  try {
    const article = await Article.findByPk(id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
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
    article.canonicalUrl = canonicalUrl;
    await article.save();
    res.json({ message: 'Article updated successfully', article });
  } catch (error) {
    next(error);
  }
});

router.delete('/articles/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const article = await Article.findByPk(id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    await article.destroy();
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
