var express = require('express');
var bodyParser =  require('body-parser');
var apiHandler = require('./api-handler');
var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname })
});

app.post('/api/auth/local', function (req, res) {

    res.json(apiHandler.success({jwt: 'sdfwefwdfdewe', short: 'sd'}));
});


app.get('/api/source', function (req, res) {

    res.json(apiHandler.success([{id: 1, name: 'PopCash'}]));
});


app.get('/api/usersource', function (req, res) {

    res.json(apiHandler.success([{id: 1, statusText: 'Created', name: 'PopCash', isActive: true, isVerified: true, source: {name: 'qwerty'}}]));
});







app.listen(3000, function () {
    console.log('Optimizer app listening on port 3000!')
});