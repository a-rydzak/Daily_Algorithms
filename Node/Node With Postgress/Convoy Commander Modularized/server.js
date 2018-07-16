let express  = require('express')
    app   = express()
    bodyParser = require('body-parser')
    path = require('path')
    cons= require('consolidate')
    dust=require('dustjs-helpers')
    pg=require('pg')

const config = {
    user: 'andrew_admin',
    database: 'Convoy_Commander',
    password: 'COney123',
    port: 5432
};

const pool= new pg.Pool(config)
const   connect= "postgres://andrew_admin:COney123@localhost/Convoy_Commander"

//Assign dust engine to dust files
app.engine('dust', cons.dust)
app.set('view engine', 'dust')
app.set('views', __dirname + '/views')

app.use(express.static(path.join(__dirname, 'static')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req,res) => {
  pool.connect( (req, client, done) => {
    client.query('SELECT * FROM users', (err, result)=>{
      if(err){
        return console.error('error running query', err)
      }else{
        console.log(result.rows)
        res.render('index', {users: result.rows})
        done()
      }
    })
  })
})


app.post('/add_soldier', (req,res) => {
  let user_name= req.body.user_name
  let user_email= req.body.user_email
  let password= req.body.password
  pool.connect( (req, client, done) => {
    client.query("INSERT INTO users(user_name, user_email, password) VALUES($1, $2, $3)", [user_name, user_email, password], (err, result)=>{
      if(err){
        return console.error('error running query', err)
      }else{
        console.log(result.rows)
        res.redirect('/')
        done()
      }
    })
  })
})

app.post('/delete_soldier', (req,res) => {
  let user_name= req.body.user_name
  pool.connect( (req, client, done) => {
    client.query("DELETE FROM users WHERE users.user_name =$1", [user_name], (err, result)=>{
      if(err){
        return console.error('error running query', err)
      }else{
        console.log(result.rows)
        res.redirect('/')
        done()
      }
    })
  })
})

app.post('/update_soldier', (req,res) => {
  let orgional_name= req.body.orgional_name
  let new_name= req.body.new_name
  pool.connect( (req, client, done) => {
    client.query("UPDATE users  SET user_name=$1 WHERE user_name=$2", [new_name, orgional_name], (err, result)=>{
      if(err){
        return console.error('error running query')
      }else{
        console.log(result.rows)
        res.redirect('/')
        done()
      }
    })
  })
})

//"UPDATE products SET pr_title = ($1), pr_usercode = ($2) WHERE pr_id=($3)"
  // mongoose = require('mongoose') //needed only for mongoose


// var SoldierSchema = new mongoose.Schema({
//     first_name:  { type: String, required: true, minlength: 6},
//     last_name: { type: String, required: true, maxlength: 20 },
//     age: { type: Number, min: 1, max: 150 },
//     email: { type: String, required: true }
// }, {timestamps: true })

// app.use(bodyParser.urlencoded({extended: true}))
// app.use(express.static(path.join(__dirname, 'static')))

// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')

// connect to the database -- make sure after localhost/ you put in the db name you created
// mongoose.connect('mongodb://localhost/soldiers')
// // use native promises -- uses the promise library to save an object
// mongoose.Promise = global.Promise
// // Set this Schema in our Models as 'User'
// mongoose.model('Mongoose', SoldierSchema)

// Retrieve this Schema from our Models, named 'Quote'
// MOST IMPORTANT -- get this blueprint by making a new schema instance from the mongoose.Schema()
// object constructor
// let Mongoose = mongoose.model('Mongoose')

// app.get('/', (req,res) => {
// 	Mongoose.find({}).exec((err, soldiers) => {
// 	if(err){
// 		console.log("Error Has Occured Getting Soldiers")
// 	}else{
// 		res.render('index', {soldiers:soldiers})
// 	}

// 	})
// })

// app.post('/add_soldier', (req,res) => {

// 	let new_soldier = new Mongoose({first_name: req.body.first_name, last_name: req.body.last_name, age: req.body.age, email: req.body.email})
// 	new_soldier.save((err) => {
//     // if there is an error, console.log that something went wrong
//     if(err){
//       console.log('Something went wrong while submitting.')
//     }
//     // if there are no errors, it will let you know and it will complete the save function
//     else{
//       console.log('You have successfully added a mongoose!')
//       // res.redirect('/')
//       res.redirect('/')
//     }
//   })
// })


app.listen(8000, () => {
  console.log('Listening on port 8000')
})