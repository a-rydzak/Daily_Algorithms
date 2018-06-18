// Less code, less, time, less bugs
// Higher Order functions, passing functions as values


var tripple = function(x){ // ananonmyous function passed as a variable
	x*3
}

var waffle = tripple

waffle(3)


var animals =[
	{name: 'Toby', species: 'Dog'},
	{name: 'Nina', species: 'Dog'},
	{name: 'Jeff', species: 'Cat'},
	{name: 'Rachael', species: 'Cat'},
]

var isDog= function(animal){
	return animal.species === 'Dog'
}


var dogs = animals.filter(isDog)

var cats = animals.reject(isDog)

cats
// -----------------------
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(function(word){
	if(word.length >6){
		return word
	}
});
result;

// vs\

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

let word = function(word){
	if(word.length >6){
		return word
	}
}

const result = words.filter(word);
result;