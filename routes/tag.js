const Tag = require('../model/tag');
const express = require('express');
const router = express.Router();

router.get('/tags', async (req, res, next) => {
  try {
    const tags = await Tag.findAll();
    res.json(tags);
  } catch (error) {
    next(error); // 将错误传递给全局错误处理中间件
  }
});

router.get('/tags/:id', async (req, res) => {
  const tagId = req.params.id;
  try {
    const tag = await Tag.findByPk(tagId);
    if (tag) {
      res.json(tag);
    } else {
      res.status(404).json({ error: 'Tag not found' });
    }
  } catch (error) {
    console.error('Error getting tag:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/tags', async (req, res, next) => {
  const { tag_name } = req.body; // Assuming you are sending tag_name in the request body
  try {
    const tag = await Tag.create({
      tag_name,
    });
    res.status(201).json({ message: 'Tag created successfully', tag });
  } catch (error) {
    next(error);
  }
});

router.put('/tags/:id', async (req, res, next) => {
  const { id } = req.params;
  const { tag_name } = req.body; // Assuming you are sending tag_name in the request body
  try {
    const tag = await Tag.findByPk(id);
    if (!tag) {
      return res.status(404).json({ error: 'Tag not found' });
    }
    tag.tag_name = tag_name;
    await tag.save();
    res.json({ message: 'Tag updated successfully', tag });
  } catch (error) {
    next(error);
  }
});

router.delete('/tags/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const tag = await Tag.findByPk(id);
    if (!tag) {
      return res.status(404).json({ error: 'Tag not found' });
    }
    await tag.destroy();
    res.json({ message: 'Tag deleted successfully' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
