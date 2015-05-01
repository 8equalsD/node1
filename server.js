var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var multer = require('multer'); 
//var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json()); // for parsing application/json

app.get('/', function(req, res){

  //send the index.html file for all requests
  //res.sendFile('index.html', { root: path.join(__dirname, '/') });
  res.sendFile(__dirname + '/index.html');

});

app.post('/', function(req, res) {

    //var pushMsg = req.body.pushText;
    io.emit('message', req.body.pushText);
    console.log (req.body);
    res.send("");

});

app.listen(app.get('port'), function() {
  console.log("Node app is running on port:" + app.get('port'))
})

app.listen(app.post('port'), function() {
  console.log("Node app is running on port:" + app.get('port'))
})


/*
http.listen(3001, function(){

  console.log('listening on *:3001');

});
*/

/*

//for testing, we're just going to send data to the client every second
setInterval( function() {

  
   // our message we want to send to the client: in this case it's just a random
   // number that we generate on the server
  
  var msg = Math.random();
  io.emit('message', msg);
  console.log (msg);

}, 1000);

*/