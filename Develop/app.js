const express = require('express');
const fs = require('fs');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.get('/',function(req, res){
    res.sendFile(__dirname + '/public/index.html')
});
app.get('/notes', function(req, res){
    res.sendFile(__dirname + '/public/notes.html')
});

app.get('/api/notes', function(req, res){
    const dbJson = fs.readFileSync(__dirname + '/db/db.json', 'utf8');
    return res.json(JSON.parse(dbJson));
});
app.post('/api/notes',function(req,res){
    var newNotes = req.body;

});

app.listen(3000, function(){
    console.log('localhost:3000')
});