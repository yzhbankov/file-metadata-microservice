/**
 * Created by Iaroslav Zhbankov on 19.12.2016.
 */
var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({dest: 'uploads/'});


app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public');
});

app.post('/file_size', upload.single('name'), function (req, res, next) {
    var filesize = req.file.size;
    res.send({"size": filesize});
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Server start. Listening on port 3000');
});