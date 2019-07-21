
const mysql = require('mysql2/promise');
const bluebird = require('bluebird');

async function connection () {
  const connection = await mysql.createConnection({host:process.env.HOST_DB, user:process.env.USER_DB, password:process.env.PASSWORD_USER, database:process.env.DB_NAME, Promise: bluebird})
  return connection
}

  module.exports = {
    connection
  }

