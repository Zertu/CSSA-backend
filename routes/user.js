const { hashPassword, verifyPassword } = require('../utils/crypto');
const User = require('../model/user');
const express = require('express');
const jwt = require('jsonwebtoken');
const { secret } = require('../utils/jwt');

const router = express.Router();

// 注册新用户
router.post('/users/register', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await hashPassword(`${password}`);
    const user = await User.create({
      username,
      password: hashedPassword,
    });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    next(error);
  }
});

router.post('/users/reset', async (req, res, next) => {
  const { username } = req.body;
  try {
    const hashedPassword = await hashPassword('123456');
    const user = await User.findOne({ where: { name: username } });
    user.password = hashedPassword;
    user.save();
    res.status(201).json({ message: 'User password updated successfully', user });
  } catch (error) {
    next(error);
  }
});

// 用户登录
router.post('/users/login', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { name: username } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const match = await verifyPassword(password, user.password);
    if (!match) {
      return res.status(401).json({ error: 'Incorrect password' });
    }
    const accessToken = jwt.sign(
      { exp: Math.floor(Date.now() / 1000) + 60 * 60, username, authority: user.authority.join(',') },
      secret
    );

    res.json({ message: 'Logged in successfully', data: { ...user, token: accessToken } });
  } catch (error) {
    next(error);
  }
});
// 创建新用户
router.post('/users', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await hashPassword(`${password}`);
    const user = await User.create({
      username,
      password: hashedPassword,
    });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    next(error);
  }
});

// 获取所有用户
router.get('/users', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'name', 'displayname', 'email', 'last_login'],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// 获取特定用户
router.get('/users/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, {
      attributes: ['id', 'username'],
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    next(error);
  }
});

// 更新用户
router.put('/users/:id', async (req, res, next) => {
  const { id } = req.params;
  const updatedFields = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const allowedUpdates = [
      'email',
      'emailConfirmed',
      'name',
      'key',
      'userId',
      'displayName',
      'picture',
      'gender',
      'location',
      'website',
    ];
    for (let key in updatedFields) {
      if (allowedUpdates.includes(key)) {
        user[key] = updatedFields[key];
      }
    }
    await user.save();
    res.json({ message: 'User updated successfully', user });
  } catch (error) {
    next(error);
  }
});

// 删除用户
router.delete('/users/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
