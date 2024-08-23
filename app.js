const express = require('express');
require('dotenv').config();
const cors = require('cors');

const articlesRouter = require('./routes/article');
const authorRouter = require('./routes/author');
const tagRouter = require('./routes/tag');
const userRouter = require('./routes/user');
const { jwt } = require('./utils/jwt');
const app = express();

app.use(cors()); // 允许跨域请求
app.use(jwt);
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token...');
  } else {
    next(err);
  }
});
app.use(express.json());

app.use('/', articlesRouter);
app.use('/', tagRouter);
app.use('/', userRouter);
app.use('/author', authorRouter);

// 全局错误处理中间件
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// 运行服务器
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
