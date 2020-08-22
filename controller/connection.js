const sql = require("mssql")

const pool = new sql.ConnectionPool({
    user: 'SMART\m.khaled',
    server: 'MOHAMED_KHALED',
    database: 'inv',
    options: {
        trustedConnection: true,
        enableArithAbort: true
      }
})

pool.connect(err => {
    console.log('pool has been disconnected')
})

module.exports = pool