const db = require('./crowdfunding_db')
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());



// 使用路由处理请求
app.get('/api/all', (req, res) => {
  // 这里可以执行数据库查询
  const sql =
    `SELECT f.*,c.* FROM fundraiser f
LEFT JOIN   category c
ON f.CATEGORY_ID = c.CATEGORY_ID
  `
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// 使用路由处理请求
app.get('/api/search', (req, res) => {
  // 这里可以执行数据库查询
  let sql =
    `SELECT f.*,c.* FROM fundraiser f
LEFT JOIN   category c
ON f.CATEGORY_ID = c.CATEGORY_ID WHERE 1 = 1 
`;
console.log('---req.query',req.query)
if(req.query.ORGANIZER){
  sql += ` AND ORGANIZER = '${req.query.ORGANIZER}' `
}
if(req.query.CITY){
  sql += ` AND CITY = '${req.query.CITY}' `
}
if(req.query.CATEGORY_ID){
  sql += ` AND f.CATEGORY_ID = '${req.query.CATEGORY_ID}' `
}
console.log('--sql---',sql)
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// 使用路由处理请求
app.get('/api/id', (req, res) => {
  // 这里可以执行数据库查询
  const sql =
    `SELECT f.*,c.* FROM fundraiser f
LEFT JOIN   category c
ON f.CATEGORY_ID = c.CATEGORY_ID WHERE FUNDRAISER_ID = ${req.query.FUNDRAISER_ID} ;
`
console.log(sql)
console.log('----req.query.FUNDRAISER_ID----',req.query.FUNDRAISER_ID)

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
