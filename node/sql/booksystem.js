// 链接sql数据库
const mysql=require('mysql');
const booksystem=mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'books_manage_system'
})
module.exports=booksystem;