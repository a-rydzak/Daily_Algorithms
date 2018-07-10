var express = require("express");
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));

// app.get('/', function (request, response) {
//     response.send("<h1>Hello! Try typing localhost:8000/cars in the URL to get to where you need to go.</h1>");
// });

app.get("/", function (request, response) {
    response.render('index');
});

app.get("/cars", function (request, response) {
    
    response.render('cars');
});

app.get("/cats", function (request, response) {
    response.render('cats');
});


app.get("/people", function (request, response) {
    response.render('people');
});

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})







app.listen(8000, function () {
})