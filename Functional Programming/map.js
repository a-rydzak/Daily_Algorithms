var animals =[
	{name: 'Toby', species: 'Dog'},
	{name: 'Nina', species: 'Dog'},
	{name: 'Jeff', species: 'Cat'},
	{name: 'Rachael', species: 'Cat'},
]

var names = animals.map((animal)=>{ //map takes a callback 
	return animal.name + ' is a ' + animal.species + '!'
})

var names = animals.map((x)=>{ x.name})

names