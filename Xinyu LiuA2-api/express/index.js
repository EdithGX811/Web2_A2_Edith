const db = require('./crowdfunding_db')// Import database connection
const cors = require('cors');// Import CORS middleware
const express = require('express');//Import Express
const app = express();//Create an Express application

app.use(cors());//Used to parse JSON data for incoming requests.



// A Node.js server-side routing handler created using the ExpressJS framework
app.get('/api/all', (req, res) => {//When the client sends a GET request to/app/all, the subsequent callback function will be executed. Req request object, res is the response object, used to send a response to the client.
 
  // Execute database queries
  const sql =//Query database statements
    `SELECT f.*,c.* FROM fundraiser f
LEFT JOIN   category c
ON f.CATEGORY_ID = c.CATEGORY_ID 
  `
  db.query(sql, (err, results) => {//Call the query method of the database connection object db to execute the SQL query defined earlier.
    if (err) throw err;//Callback function to process query results.
    res.json(results);//Return data
  });
});

/*
*Dynamically construct SQL queries based on the query parameters provided by the client,
*And retrieve eligible fundraising activities and related category information from the database. Finally, return the results to the client in JSON format.
*/

// Use routing to process requests
app.get('/api/search', (req, res) => {
  // Execute database queries
  let sql =
    `SELECT f.*,c.* FROM fundraiser f
LEFT JOIN   category c
ON f.CATEGORY_ID = c.CATEGORY_ID WHERE 1 = 1 
`;
console.log('---req.query',req.query)//Print the query parameters for the request.

//Check if the request contains specific query parameters (ORGANIZER CITY、CATEGORY_ID）。 If there are, concatenate the corresponding conditions into the SQL query string. Each condition is connected by AND to ensure that only records that meet the condition are queried.
if(req.query.ORGANIZER){
  sql += ` AND ORGANIZER = '${req.query.ORGANIZER}' `
}
if(req.query.CITY){
  sql += ` AND CITY = '${req.query.CITY}' `
}
if(req.query.CATEGORY_ID){
  sql += ` AND f.CATEGORY_ID = '${req.query.CATEGORY_ID}' `
}
//Print the concatenated SQL query statements for debugging purposes and confirm the correctness of the generated SQL statements.
console.log('--sql---',sql)

//Execute a pre built SQL query using the db.query method
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

/*
*Based on the FUNDRAISER_ID parameter provided by the client, query the database for fundraising activities and category information related to that ID,
*And send the results back to the client in JSON format.
*/
// Use routing to process requests
app.get('/api/id', (req, res) => {
  // You can perform database queries here
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

const port = 3060;//Set the constant port to 3060, which represents the port number that the server will listen on.
//Call the listen method of the Express application, pass in the port number port and a callback function. Will cause the server to start accepting client requests
app.listen(port, () => {
  console.log(`Server running on port ${port}`);//Startup successful, print this message.
});
