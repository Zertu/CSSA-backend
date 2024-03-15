const express = require('express');
require('dotenv').config();
const cors = require('cors');

const articlesRouter = require('./routes/article');
const app = express();
app.use(express.json());
app.use(cors()); // 允许跨域请求

app.use('/', articlesRouter);

// 全局错误处理中间件
app.use((err, req, res) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});
// 运行服务器
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
