let express = require('express')
  app = express()
  bodyParser = require('body-parser')
  path = require('path')
  cons = require('consolidate')
  dust = require('dustjs-helpers')
  pg = require('pg')
  ejs = require('ejs')
  Sequelize = require('sequelize')

//-------------------------------Assign dust engine to dust files
// app.engine('ejs', cons.ejs)
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(path.join(__dirname, 'static')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//-------------------------------Setup the connection to the database to be used

const sequelize = new Sequelize('Convoy_Commander', 'andrew_admin', 'COney123', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})


//-------------------------------------Start Of Tables

const Soldier = sequelize.define('soldiers', {
    soldier_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: {
                args: [5, 20],
                msg: "Must be between 2 and 20 characters long and Unique"
            }
        }
    },
    soldier_rank: {
        type: Sequelize.STRING
    },
    soldier_motto: {
        type: Sequelize.TEXT,
        defaultValue: 'Coming Soon...'
    },
    soldier_age: {
        type: Sequelize.INTEGER
    }
}, {
    hooks: {
        beforeValidate: () => {
            console.log('Before 1')
        },
        afterValidate: () => {
            console.log('After 1')
        },
        beforeCreate: () => {
            console.log('Before 2')
        },
        afterCreate: () => {
            console.log('After 2')
        }
    }
    //   , {
    //   hooks:{
    //     beforeValidate: () => {console.log('beforeValidate')},
    //     afterValidate: () => {console.log('afterValidate')},
    //     beforeCreate: () => {console.log('beforeCreate')},
    //     afterCreate: () => {console.log('afterCreate')}
    //   }
    // }
})


// app.get('/', (req,res) => {
//       let soldiers_result
//         Soldier.findAll().then(soldiers => {
//           console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//           soldiers_result=soldiers
//           console.log(soldiers_result[1])
//         })
//     res.render('index', {result: soldiers_result})
// })



app.get('/', (req,res) => {
    Soldier.sync().then(() => {
        sequelize.query("SELECT * FROM soldiers",{ type: Sequelize.QueryTypes.SELECT }).then(function (soldiers) {
              console.log(soldiers)
              res.render('index', {result: soldiers})
        }).catch((err) => {
          console.log('query all has failed')
            res.render('index', {error: 'query all has failed'})
      })   
    })  

})
//------------------------------Start of Routes

app.post('/add_soldier', (req,res) => {
  Soldier.sync().then(() => {
      // Table created
      Soldier.create({
          soldier_name: req.body.name,
          soldier_rank: req.body.rank,
          soldier_motto: req.body.motto,
          soldier_age: req.body.age
      }).catch((err) => {
          console.log('')
          console.log('Create Error Has Occured', err.message)
      })
  })
  res.redirect('/')
})

// Soldier.sync().then(() => {
//     // Table created
//     Soldier.create({
//         soldier_name: 'BeckeyDenice',
//         soldier_rank: 'Private',
//         soldier_motto: "Gory Gory What a hell of a way to die",
//         soldier_age: 23
//     }).catch((err) => {
//         console.log('')
//         console.log('Create Error Has Occured', err.message)
//     })
// })

//Find By ID
//  Soldier.sync().then(() => {
//   // Table created
//   Soldier.findById(1).then((soldier) =>{
//     console.log(soldier.dataValues)
//   })
// })


//Find By ID
//  Soldier.sync().then(() => {
//   // Table created
//   Soldier.findAll().then((soldiers) =>{
//     console.log(soldiers.length)
//   })
// })

// console.log(Soldier)

app.listen(8000, () => {
    console.log('Listening on port 8000')
})

//----------------------------------------------Section Starts Wiohout Sequelize!!!!! (All Below)
// let express  = require('express')
//     app   = express()
//     bodyParser = require('body-parser')
//     path = require('path')
//     cons= require('consolidate')
//     dust=require('dustjs-helpers')
//     pg=require('pg')

// const config = {
//     user: 'andrew_admin',
//     database: 'Convoy_Commander',
//     password: 'COney123',
//     port: 5432
// }

// const pool= new pg.Pool(config)
// const   connect= "postgres://andrew_admin:COney123@localhost/Convoy_Commander"

// //Assign dust engine to dust files
// app.engine('dust', cons.dust)
// app.set('view engine', 'dust')
// app.set('views', __dirname + '/views')

// app.use(express.static(path.join(__dirname, 'static')))

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))

// app.get('/', (req,res) => {
//   pool.connect( (req, client, done) => {
//     client.query('SELECT * FROM users', (err, result)=>{
//       if(err){
//         return console.error('error running query', err)
//       }else{
//         res.render('index', {users: result.rows})
//         done()
//       }
//     })
//   })
// })


// app.post('/add_soldier', (req,res) => {
//   let user_name= req.body.user_name,
//       user_email= req.body.user_email,
//       password= req.body.password,
//       age = req.body.age,
//       motto=req.body.motto

//   pool.connect( (req, client, done) => {
//     client.query("INSERT INTO users(user_name, user_email, password, age, motto) VALUES($1, $2, $3, $4, $5)", [user_name, user_email, password, age, motto], (err, result)=>{
//       if(err){
//         console.log(err)
//         res.redirect('/')
//         done()
//       }else{
//         res.redirect('/')
//         done()
//       }
//     })
//   })
// })

// app.post('/delete_soldier', (req,res) => {
//   let user_name= req.body.user_name
//   pool.connect( (req, client, done) => {
//     client.query("DELETE FROM users WHERE users.user_name =$1", [user_name], (err, result)=>{
//       if(err){
//         return console.error('error running query', err)
//       }else{
//         res.redirect('/')
//         done()
//       }
//     })
//   })
// })

// app.post('/update_soldier', (req,res) => {
//   let orgional_name= req.body.orgional_name
//   let new_name= req.body.new_name
//   pool.connect( (req, client, done) => {
//     client.query("UPDATE users  SET user_name=$1 WHERE user_name=$2", [new_name, orgional_name], (err, result)=>{
//       if(err){
//         return console.error('error running query')
//       }else{
//         res.redirect('/')
//         done()
//       }
//     })
//   })
// })


// app.listen(8000, () => {
//   console.log('Listening on port 8000')
// })


//----------------------------------------------------------------------------All Validations

// const ValidateMe = sequelize.define('foo', {
//   foo: {
//     type: Sequelize.STRING,
//     validate: {
//       is: ["^[a-z]+$",'i'],     // will only allow letters
//       is: /^[a-z]+$/i,          // same as the previous example using real RegExp
//       not: ["[a-z]",'i'],       // will not allow letters
//       isEmail: true,            // checks for email format (foo@bar.com)
//       isUrl: true,              // checks for url format (http://foo.com)
//       isIP: true,               // checks for IPv4 (129.89.23.1) or IPv6 format
//       isIPv4: true,             // checks for IPv4 (129.89.23.1)
//       isIPv6: true,             // checks for IPv6 format
//       isAlpha: true,            // will only allow letters
//       isAlphanumeric: true,     // will only allow alphanumeric characters, so "_abc" will fail
//       isNumeric: true,          // will only allow numbers
//       isInt: true,              // checks for valid integers
//       isFloat: true,            // checks for valid floating point numbers
//       isDecimal: true,          // checks for any numbers
//       isLowercase: true,        // checks for lowercase
//       isUppercase: true,        // checks for uppercase
//       notNull: true,            // won't allow null
//       isNull: true,             // only allows null
//       notEmpty: true,           // don't allow empty strings
//       equals: 'specific value', // only allow a specific value
//       contains: 'foo',          // force specific substrings
//       notIn: [['foo', 'bar']],  // check the value is not one of these
//       isIn: [['foo', 'bar']],   // check the value is one of these
//       notContains: 'bar',       // don't allow specific substrings
//       len: [2,10],              // only allow values with length between 2 and 10
//       isUUID: 4,                // only allow uuids
//       isDate: true,             // only allow date strings
//       isAfter: "2011-11-05",    // only allow date strings after a specific date
//       isBefore: "2011-11-05",   // only allow date strings before a specific date
//       max: 23,                  // only allow values <= 23
//       min: 23,                  // only allow values >= 23
//       isCreditCard: true,       // check for valid credit card numbers

//       // custom validations are also possible:
// isEven(value) {
//   if (parseInt(value) % 2 != 0) {
//     throw new Error('Only even values are allowed!')
//     // we also are in the model's context here, so this.otherField
//     // would get the value of otherField if it existed
//   }
// }
// }
//   }
// });

// const Pub = Sequelize.define('pub', {
//   name: { type: Sequelize.STRING },
//   address: { type: Sequelize.STRING },
//   latitude: {
//     type: Sequelize.INTEGER,
//     allowNull: true,
//     defaultValue: null,
//     validate: { min: -90, max: 90 }
//   },
//   longitude: {
//     type: Sequelize.INTEGER,
//     allowNull: true,
//     defaultValue: null,
//     validate: { min: -180, max: 180 }
//   },
// }, {
//   validate: {
//     bothCoordsOrNone() {
//       if ((this.latitude === null) !== (this.longitude === null)) {
//         throw new Error('Require either both latitude and longitude or neither')
//       }
//     }
//   }
// })