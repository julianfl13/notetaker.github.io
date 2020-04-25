const express = require('express');
//const fs = require('fs');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',function(req, res){
    res.sendFile(__dirname + '/public/index.html')
});
app.get('/notes', function(req, res){
    res.sendFile(__dirname + '/public/notes.html')
});

app.get('/app/notes', function(req, res){
    res.sendFile(__dirname)
})

app.listen(3000, function(){
    console.log('localhost:3000')
});