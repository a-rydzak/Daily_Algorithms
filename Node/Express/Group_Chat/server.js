
var express = require("express"); 
var app = express();
// require body-parser
var bodyParser = require('body-parser');
// use it!
var session = require('express-session');
var name;
// let path = require('path')  this sets all paths with appropiarate path slashes, mac vs linux vs windows
// app.set('views', path.join(__dirname, 'views')) 

app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.post('URL', function (req, res){});
app.get('URL', function (req, res){});
const server = app.listen(8000);
const io = require('socket.io')(server);


app.use(session({
  secret: 'Boo_Coon_Noon_At_Noon',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.get("/", function (req, res) {
    res.render('index');
});

app.post("/login", function (req, res) {
    req.session.name = req.body.name;
    name=req.session.name;
    res.render('chat', {name});
});
// 



// Web Socket Starts Here


// app.get("/go_back", function (req, res) {
//     res.redirect('/');
// });

// app.listen(8000, function () {
// })

// -----------------------------------------Example Code for io socket emits.
// const express = require('express');
// const app = express();
     
// // ...other middleware...
     
// const server = app.listen(1337);
// const io = require('socket.io')(app);
    
// io.on('connection', function (socket) { 
  
//   socket.on('alpha', function (data) { 
//     // socket.emit will respond back to the socket client that triggered this 'alpha' listener
//     socket.emit('updateClient', { data: 5 });
//   });
//   socket.on('beta', function (data) { 
//     // io.emit will message all socket clients 
//     io.emit('updateAllClients', { data: 5 });
//   });
//   socket.on('gamma', function (data) { 
//     // socket.broadcast will message all socket clients except the one that triggered the 'gamma' listener
//     socket.broadcast.emit('updateAllExceptOne', { data: 5 });
//   });
// });