// Functions that call functions that call functions

let cat = (name, size, element) =>
	name + ' is a ' +
	size + ' cat that foot flops ' +
	element + '!'

cat('Koshka', 'Big Boy', 'Casio Watch')


// VS Curries

let cat =
	name =>
		size=>
			element =>
				name + ' is a ' +
				size + ' cat that foot flops ' +
				element + '!'

cat('Koshka')('Big Boy')('Casio Watch')