var express = require('express');
var router = express.Router();
var pool = require('./../controller/connection')
const auth = require('../controller/auth');
const sql = require('mssql')

router.post('/GetInfo', auth, async (req, res) => {
   let connection = await pool; 
   connection.request() 
        .input('UnitSer', sql.VarChar(50), req.body.UnitSer)
        .output('status', sql.VarChar(50))
        .output('code', sql.Int)
        .execute('GetInfo', (err, result) => {
            // ... error checks
            console.log(result)
        })
});

router.post('/Pay', auth, async (req, res) => {


});


module.exports = router;