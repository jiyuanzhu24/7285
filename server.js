const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 指定静态文件的目录
app.use(express.static(path.join(__dirname)));

// 启动服务器
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
