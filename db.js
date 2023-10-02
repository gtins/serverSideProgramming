import mysql from 'mysql2';

const conecta = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'serverside'
})
export default {conecta};