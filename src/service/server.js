const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use( cors({
    credentials: true,
    origin: true,
}));

app.use('/',require('./routes'))

var server = app.listen((process.env.PORT || 4008), () =>{
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listeneing at http://%s:%s', host, port);
});

server.timeout = 600000