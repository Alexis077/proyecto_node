const services = require('../services/users')
const jwt = require('jwt-simple')

async function getUsers(){
   try{
        let data = await services.getUsers()
        return data
   }catch(err){
        return err
   }
}
async function getUser(id){
    try{
        let data = await services.findUserById(id)
        return data
    }catch(err){
        return err
    }
}
async function newUser(name,last_name,email,password,role){
    try{
        let data = await services.createUser(name,last_name,email,password,role)
        return data
    }catch(err){
        return err
    }
}
async function updateUser(name,last_name,email,role,id){
    try{
        let data = await services.updateUser(name,last_name,email,role,id)
        return data
    }catch(err){
        return err
    }
}
async function updateUserPassword(id,password){
    try{
        let data = await services.updatePasword(id,password)
        return data
    }catch(err){
        return err
    }
}
async function deleteUser(id){
    try{
        let data = await services.deleteUser(id)
        return data
    }catch(err){
        return err
    }
}
async function updateUserToken(id,payload){
    try{
        let token = jwt.encode(payload,process.env.SECRET)
        let data = await services.updateToken(id,token)
        return data
    }catch(err){
        return err
    }
}
async function getUserToken(id){
    try{
        let data = await services.getToken(id)
        return data
    }catch(err){
        return err
    }
}


module.exports = {
    getUsers,
    getUser,
    newUser,
    updateUser,
    updateUserPassword,
    deleteUser,
    updateUserToken,
    getUserToken
}
