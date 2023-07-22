const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: '127.0.0.1',        // MySQL server hostname (e.g., 'localhost')
    user: 'root',    // MySQL username
    password: 'Root@:123', // MySQL password
    database: 'maimt_user_management'  // MySQL database name
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL server');
});
  
module.exports = connection;
