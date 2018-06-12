log_it =(x) => { console.log(x)}

(log_it_auto= () => console.log('Hey hey hey'))()

const cat={

}
// ---------filter higher order functions
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(words => word == 'elite');

console.log(result);

// ------------higher order functions
var triple= function(x){
	return x*3
}
waffle=triple

waffle(30)

var dog=[]

dog[dog.length]='one'
dog[dog.length]='two'

// ------------higher order functions
const animal=[
{name: 'Boo', species:'cat'},
{name: 'lily', species:'cat'},
{name: 'catniss', species:'cat'},
{name: 'clint', species:'bird'},
{name: 'Buckwheat', species:'dog'}
]

var isCat= function(animal){
	return animal.species === 'cat'
}

var cats=animal.filter(isCat)



