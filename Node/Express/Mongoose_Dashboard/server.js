let express  = require('express')
  app   = express()
  bodyParser = require('body-parser')
  path = require('path')
  mongoose = require('mongoose')


var MongooseSchema = new mongoose.Schema({
    first_name:  { type: String, required: true, minlength: 6},
    last_name: { type: String, required: true, maxlength: 20 },
    age: { type: Number, min: 1, max: 150 },
    email: { type: String, required: true }
}, {timestamps: true })

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'static')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// connect to the database -- make sure after localhost/ you put in the db name you created
mongoose.connect('mongodb://localhost/quotes')
// use native promises -- uses the promise library to save an object
mongoose.Promise = global.Promise
// Set this Schema in our Models as 'User'
mongoose.model('Mongoose', MongooseSchema)

// Retrieve this Schema from our Models, named 'Quote'
// MOST IMPORTANT -- get this blueprint by making a new schema instance from the mongoose.Schema()
// object constructor
let Mongoose = mongoose.model('Mongoose')

app.get('/', (req,res) => {
  // retrieve the Quotes from the database and include them in the view page we will be rendering
  res.redirect('/mongoose')
})

app.get('/new', (req,res) => {
  // retrieve the Quotes from the database and include them in the view page we will be rendering
  res.render('new_mongoose')
})
// add quote request
app.post('/new', (req,res) => {
  // add the quote from req.body to the database here
  // console.log('POST DATA', req.body)
  let new_mongoose = new Mongoose({first_name: req.body.first_name, last_name: req.body.last_name, age: req.body.age, email: req.body.email})
  new_mongoose.save((err) => {
    // if there is an error, console.log that something went wrong
    if(err){
      console.log('Something went wrong while submitting.')
    }
    // if there are no errors, it will let you know and it will complete the save function
    else{
      console.log('You have successfully added a mongoose!')
      // res.redirect('/')
      res.redirect('/')
    }
  })
})

app.get('/mongoose', (req,res) => {
  Mongoose.find({}).sort('-createdAt').exec((err, all_mongoose) => {

    console.log(all_mongoose)
    // check for errors and only render page if no errors
    if(err){
      console.log("There's an error")
    }
    else{
      console.log("Success")
      // let all_quotes = all_quotes.sort({createdAt: -1})
      res.render('all_mongoose', {all_mongoose: all_mongoose})
    }
  })
})

app.get("/mongoose/:id", function (req, res){
    // just to illustrate that req.params is usable here:
    var id=req.params.id
    Mongoose.find({"_id": id}).exec((err, mongoose) => {
    // check for errors and only render page if no errors
    if(err){
      console.log("There's an error")
    }
    else{
      console.log("Success")
      console.log(mongoose)
      // let all_quotes = all_quotes.sort({createdAt: -1})
      res.render('specific_mongoose', {mongoose:mongoose})
    }
  })
})

app.post("/mongoose/edit/:id", function (req, res){
    // just to illustrate that req.params is usable here:
    var id=req.params.id
    Mongoose.update({"_id": id},{first_name: req.body.first_name, last_name: req.body.last_name, age: req.body.age, email: req.body.email}).exec((err, mongoose) => {
    // check for errors and only render page if no errors
    if(err){
      console.log("There's an error")
    }
    else{
      console.log("Success")
      console.log(mongoose) 
      // let all_quotes = all_quotes.sort({createdAt: -1})
      res.redirect('/mongoose')
    }
  })
})

app.post("/mongoose/destroy/:id", function (req, res){
    // just to illustrate that req.params is usable here:
    var id=req.params.id
    Mongoose.remove({"_id": id}).exec((err, mongoose) => {
    // check for errors and only render page if no errors
    if(err){
      console.log("There's an error")
    }
    else{
      console.log("Success")
      console.log(mongoose) 
      // let all_quotes = all_quotes.sort({createdAt: -1})
      res.redirect('/mongoose')
    }
  })
})
app.listen(8000, () => {
  console.log('Listening on port 8000')
})