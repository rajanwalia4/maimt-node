function createUser(req,res){
    //talk to services
    return res.status(201).json({
        message: "User created successfully",
    })
}

getUsers = (req,res)=>{
    return res.status(201).json({
        message: "fetched the users successfully",
        users :[]
    })
}
module.exports = {
    createUser,
    getUsers
}