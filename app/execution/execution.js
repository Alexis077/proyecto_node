const chalk = require('chalk')
const connection = require('../connection/connection')



async function executeGet(sql){
    console.log(chalk.blue(sql));
    try {
        let cn = await connection.connection()
        const [rows, fields] = await cn.query(sql)
        return rows
    } catch (error) {
        return error
    }
}


async function executePost(sql){
    try {
        let cn = await connection.connection()
        const [rows, fields] = await cn.query(sql)
        return rows
    } catch (error) {
        return error
    }
}

module.exports = {
    executeGet,
    executePost
}