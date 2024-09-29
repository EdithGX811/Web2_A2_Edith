const mysql = require('mysql');
// 创建数据库连接
const db = mysql.createConnection({
    host: 'localhost', // 数据库地址
    user: 'root', // 数据库用户
    password: '123456', // 数据库密码
    database: 'crowdfunding_db' // 你要连接的数据库名
  
  });
  
  // 连接数据库
  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Connected to database');
  });

module.exports = db