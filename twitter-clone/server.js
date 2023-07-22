const express = require("express");
const server = express();
const PORT = 3000;

/*
routes - APIs -> map to controllers

controllers - they talk to their services 

services - they talk to DB

*/

server.use(express.json({extended :true}));

server.use("/api/", require("./routes/index"));



server.listen(PORT,(err)=>{
    if(err){
        throw new Error("Server not running", err);
    }
    console.log(`Server is listening on http://127.0.0.1:${PORT}`);
})