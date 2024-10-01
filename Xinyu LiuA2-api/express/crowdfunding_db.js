const mysql = require('mysql');//导入 MySQL 模块
// 创建数据库连接
const db = mysql.createConnection({
    host: 'localhost', // 数据库地址
    user: 'root', // 数据库用户
    password: '123456', // 数据库密码
    database: 'crowdfunding_db' // 要连接的数据库名
  
  });
  
  // 连接数据库
  db.connect((err) => {//尝试连接到数据库，并处理可能出现的错误
    if (err) {
      throw err;
    }
    console.log('Connected to database');
  });

module.exports = db //导出数据库连接，以便在其他模块中使用