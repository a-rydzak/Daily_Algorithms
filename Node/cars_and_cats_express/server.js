var express = require("express");
var app = express();



// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');


// require body-parser- TO Access Post Data
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

var session = require('express-session');// this is how to import session/require session


//app.HTTP_VERB('URL', function (req, res){});  // HTTP_VERB is either 'get' or 'post' etc...causes an error

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


app.get("/", function (req, res) {
    res.render('index');
});

app.get("/cars", function (req, res) {
    res.render('cars');
});

app.get("/cats", function (req, res) {
    res.render('cats');
});


app.get("/people", function (req, res) {
    res.render('people');
});

// Start of clickable cats

app.get("/cat_1", function (req, res) {
	var cat1={name: "Boo", blurb: "Boo_Coon", img:"cat_1.jpg"}
    res.render('cat_template',{cat:cat1});
});

app.get("/cat_2", function (req, res) {
	var cat2={name: "Oscar", blurb: "Oscar Meyer Weiner", img:"cat_2.jpg"}
    res.render('cat_template',{cat:cat2});
});

app.get("/cat_3", function (req, res) {
    var cat3={name: "Mugwai", blurb: "I'm a Good Mugwai", img:"cat_3.jpg"}
    res.render('cat_template',{cat:cat3});
});


app.get("/users", function (req, res){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    res.render('users', {users: users_array});
})


//---------------------------This is an example of how to get form data, see below for session
app.post('/userss', function (req, res){
    console.log("POST DATA \n\n", req.body)
    //code to add user to db goes here!
    // redirect the user back to the root route.  
    res.redirect('/')
});

//-------------------------------Another Way to post users in a form and store it in a session
app.post('/userss', function (req, res){
    // set the name property of session.  
    req.session.name = req.body.name;
    console.log(req.session.name);
    //code to add user to db goes here!
    // redirect the user back to the root route. 
    res.redirect('/');
});

//---------------------------this is how to get an id from an input
app.get("/users/:id/:gg", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id + " " + req.params.gg);
    // code to get user from db goes here, etc...
});



//------------start app.listen
app.listen(8000, function () {
})




//--------------------Response vs redirect 

//app.get('/a', function (req, res){
//   res.render('index', {title: "my Express project"});
// });
            // route to process new user form data:
//app.post('/users', function (req, res){
            // code to add user to db goes here!
            // redirect the user back to the root route. 
            // All we do is specify the URL we want to go to:
 // res.redirect('/a');
//})