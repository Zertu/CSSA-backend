const express = require('express');
const router = express.Router();
const Users = require('../model/user');

// GET /author - 获取所有作者
router.get('/', async (req, res) => {
  try {
    const authors = await Users.findAll();
    res.json(authors);
  } catch (error) {
    console.error('Error getting authors:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /author/:id - 获取特定作者
router.get('/:id', async (req, res) => {
  const authorId = req.params.id;
  try {
    const author = await Users.findByPk(authorId);
    if (author) {
      res.json(author);
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (error) {
    console.error('Error getting author:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /author - 创建作者
router.post('/', async (req, res) => {
  const { name, avatar, occupation, company, email, twitter, linkedin, github, layout } = req.body;

  try {
    const newAuthor = await Users.create({
      name,
      avatar,
      occupation,
      company,
      email,
      twitter,
      linkedin,
      github,
      layout,
    });
    res.json(newAuthor);
  } catch (error) {
    console.error('Error creating author:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /author/:id - 删除作者
router.delete('/:id', async (req, res) => {
  const authorId = req.params.id;

  try {
    const deletedAuthor = await Users.destroy({
      where: {
        id: authorId,
      },
    });
    if (deletedAuthor) {
      res.json({ success: true });
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (error) {
    console.error('Error deleting author:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /author/:id - 更新作者信息
router.put('/:id', async (req, res) => {
  const authorId = req.params.id;
  const { name, avatar, occupation, company, email, twitter, linkedin, github, layout } = req.body;

  try {
    const updatedAuthor = await Users.update(
      {
        name,
        avatar,
        occupation,
        company,
        email,
        twitter,
        linkedin,
        github,
        layout,
      },
      {
        where: {
          id: authorId,
        },
      }
    );
    if (updatedAuthor[0] === 1) {
      res.json({ success: true });
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (error) {
    console.error('Error updating author:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
