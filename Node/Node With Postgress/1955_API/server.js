let express = require('express'),
     path = require('path'),
     mongoose = require('mongoose'),
     app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.json());
var Person = require('./server/models/person.js');

app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, () => {
  console.log(`Listening on port 8000`);
})
