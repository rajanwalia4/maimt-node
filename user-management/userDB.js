const db = require("./db");

function saveUser(userObj){

    db.query('INSERT INTO users SET ?', userObj, (err, results) => {
        if (err) {
          console.error('Error executing INSERT query:', err);
          return;
        }
        console.log('Record inserted successfully');
      });
}

function getUsers(userObj){
    return new Promise((resolve,reject)=>{
        db.query('SELECT * FROM USERS', (err, results) => {
            if (err) {
              console.error('Error executing select query:', err);
              reject(err);
            }
            console.log("userDB.js USER DATA",results);
            resolve(results);
          });
    })
    
}


module.exports = {
    saveUser,
    getUsers
}