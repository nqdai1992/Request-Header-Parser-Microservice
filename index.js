/**
 * Created by Dainguyen on 17/04/2017.
 */
const os = require('os');
const getIP = require('ipware')().get_ip;
const express = require('express');
const port = process.env.PORT||5000;

var app = express();
app.get('/', (req, res) => {
   res.send('Hello world!')
});
app.get('/api/whoami/', (req, res)=>{
    var ipInfo = getIP(req);
    var jsonResult = {
        'ipAddress': ipInfo.clientIp.split(':')[3],
        'Language': req.headers["accept-language"].split(',')[0],
        'Software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
    }
    res.send(JSON.stringify(jsonResult));
});
app.listen(port);