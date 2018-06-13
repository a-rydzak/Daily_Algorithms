// function () {} vs. () =>{}

// "Use strict"; throws an error when var is not declared

var getA = function(a){
	return a
}

let getA = a => a

let multAB = (a, b) => a*b

// ----------------
let a=4;
let b

let square = () =>  b=a*a //let square = _ =>  b=a*a

square()
console.log(b)

// -------------
let a=4;
let b=0;

function square(){
	b=a*a
	return b
}
 square()
console.log(b)

// -------------
var x=function(){
	console.log('hello')
}

function x(){
	console.log('hello')
}

// ---------
var x=function(){
	console.log(arguments[0])
}
x(1,2,3,4)

let x = (...n) => {console.log(n)}
x(1,2,3,4,5)