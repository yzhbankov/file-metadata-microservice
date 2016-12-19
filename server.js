/**
 * Created by Iaroslav Zhbankov on 19.12.2016.
 */
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public');
});

app.post('/file_size', function (req, res) {
    res.send('the file size is');
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Server start. Listening on port 3000');
});