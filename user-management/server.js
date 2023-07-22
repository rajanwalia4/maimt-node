const express = require('express');
const server = express();
const db = require("./db");
const userService = require("./userDB");
server.use(express.json()); // for parsing JSON data
server.use(express.urlencoded({ extended: true })); // for parsing URL-encoded data

server.get("/",(req,res)=>{
    return res.send(`
        <h1>Student Information</h1>
        <input type="text" placeholder="Enter the name">
    `);
})

server.get("/users",async (request,response)=>{
    // Make DB call to get the users data
    let users = await userService.getUsers();
    console.log( " server.js  -------",users);
    return response.send(users);
})

server.post("/users",(req,res)=>{
    /*
        name, email, mobile, bank
    */
    console.log(req.body);
    userService.saveUser(req.body);
    //store the data in the table
    console.log("--------------------");
    return res.send("User created successfully");
})



server.listen(3000,()=>{
    console.log("Server is running on 3000");
})


// first create package.json file with command
// --> npm init -y

// install express
// npm install express
// create node_modules folder

// To automatically restart the server there is a module - nodemon
// npm install nodemon -D

// PostMan - It lets you test your APIs


// Install mysql
// npm install mysql2