const express = require('express') //引入express 模块
const app = express()              //创建实例
const mysql = require('mysql')     //引入mysql 模块
// 创建数据库连接 填入数据库信息 
//填自己数据库的信息!!!!!!!!!!!
const conn = mysql.createConnection({
  user:'root',          //用户名
  password:'123456',	//密码
  host:'localhost',		//主机（默认都是local host）
  database:'crowdfunding_db'       //数据库名
})
// 测试连接
conn.connect(err=>{
  console.log(err,'如果为null 就是连接成功');
})
// 开启服务器
app.listen(3000,()=>{
  console.log('服务器在3000端口开启。。。。。');
})