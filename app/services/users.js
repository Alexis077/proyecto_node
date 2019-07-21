
const exec = require('../execution/execution')
const bcrypt = require('bcrypt')

async function getUsers(){
    try{
        let sql = `SELECT * FROM users;`
        let data = await exec.executeGet(sql)
        return data
    }catch(err){
        return err
    }
}
async function findUserById(id) {
    try{
        let sql = `SELECT * FROM users WHERE id = '${id}' LIMIT 1;`
        let data = await exec.executeGet(sql)
        return data
    }catch(err){
        return err
    }
}
async function findUserByName(user) {
    try{
        let sql = `SELECT * FROM users WHERE user = '${user}' LIMIT 1;`
        let data = await exec.executeGet(sql)
        return data
    }catch(err){
        return err
    }
}
async function createUser(name,last_name,email,password,role) {
    try{
        let encrypted_password = await encryptPassword(password)
        let sql = `INSERT INTO users (name,last_name,email,password,role) VALUES ('${name}','${last_name}','${email}','${encrypted_password}','${role}');`
        let data = await exec.executeGet(sql)
        return data
    }catch(err){
        return err
    }
}
async function updateUser(name,last_name,email,role,id) {
    try{
        let sql = `UPDATE users SET name = '${name}',last_name = '${last_name}',email = '${email}',role = '${role}' WHERE id = ${id};`
        let data = await exec.executeGet(sql)
        return data
    }catch(err){
        return err
    }
}

async function updatePasword(id,password){
    try{
        let encrypted_password = await encryptPassword(password)
        let sql = `UPDATE users SET password = '${encrypted_password}' WHERE id = ${id};`
        let data = await exec.executeGet(sql)
        return data
    }catch(err){
        return err
    }
}
async function deleteUser(id) {
    try{
        let sql = `DELETE FROM users WHERE id = ${id};`
        let data = await exec.executeGet(sql)
        return data
    }catch(err){
        return err
    }
}
async function updateToken(id,token) {
    try{
        let sql = `UPDATE users SET token = '${token}' WHERE id = ${id};`
        let data = await exec.executeGet(sql)
        return data
    }catch(err){
        return err
    }
}
async function getToken(id) {
    try{
        let sql = `SELECT token FROM users WHERE id = ${id} LIMIT 1;`
        let data = await exec.executeGet(sql)
        return data
    }catch(err){
        return err
    }
}
async function encryptPassword(password){
    try{
        let encrypt = await bcrypt.genSalt(parseFloat(process.env.SALTROUNDS))
        let encrypt_hash = await bcrypt.hash(password,encrypt)
        return encrypt_hash
    }catch(err){
        return err
    }
}

module.exports = {
    findUserById,
    findUserByName,
    createUser,
    updateUser,
    updatePasword,
    updateToken,
    deleteUser,
    getToken,
    getUsers
}