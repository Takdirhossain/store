const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'storedb'
})
connection.connect((err)=> {
    if(err){
        console.log("Something wrong cant connect")
    } console.log("connection success")
})
module.exports = connection