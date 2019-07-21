const services = require('../services/users')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt')
const moment = require('moment')

async function getToken(email,password){
   try{
        let data = await services.findUserByEmail(email)
        let match = await bcrypt.compare(password,data[0].password)
        if(match){
            let token = await updateUserToken(data[0].id,
                {sub:data[0].id,
                 iat:moment().unix(),
                 exp:moment().add(process.env.TOKEN_LIFE,'m')
                })
            return token
        }else{
            return false
        }
   }catch(err){
        return err
   }
}
async function updateUserToken(id,payload){
    try{
        let token = jwt.encode(payload,process.env.SECRET)
        let data = await services.updateToken(id,token)
        return token
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
    getToken
}
