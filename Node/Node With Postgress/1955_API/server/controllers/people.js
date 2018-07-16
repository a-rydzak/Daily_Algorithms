const mongoose = require('mongoose');
const Person = mongoose.model('Person');


module.exports = {
  showAll: (req, res) => {
    Person.find({}, (err, people) => {
      if (err) {
        res.json(err);
      }
      else {
        res.json(people);
      }
    })
  },
  new: (req, res) => {
    let person = new Person({name: req.params.name});
    person.save((err) => {
    if(err){
        res.json(err);
    }
    else{
        res.json(person);
    }
  })
  },
  show: (req, res) => {
    Person.findOne({name: req.params.name}, (err, person) => {
      if (err) {
        res.json(err);
      }
      else {
        res.json(person);
      }
    })
  },
  remove: (req, res) => {
    Person.remove({name: req.params.name}, (err) => {
      if (err) {
        console.log("Issue deleting: " + err);
      }
      else {
        res.redirect('/');
      }
    })
  }
}
