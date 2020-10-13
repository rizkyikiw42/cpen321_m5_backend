
const express = require('express');

var app = express();
app.use(express.json());

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening at port ' + port);
});

app.get('/time', (req, res) => {
        var time = getCurTime();
        res.send('{' + time[0] + ':' + time[1] + ':' + time[2] + '}\n');
});

function getCurTime() {
    const date = new Date();
    
    return [('0' + date.getHours()).slice(-2), ('0' + date.getMinutes()).slice(-2), ('0' + date.getSeconds()).slice(-2)];
}