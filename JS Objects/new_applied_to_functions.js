function Person(saying){
	this.saying= saying
}

Person.porototype.talk = function() {
	console.log('I say', this.saying)
}

var crockford = new Person('Saying what I need to say')

crockford.talk()

// new creates a new object, finds and sets prototype

function new(constructor){
	var obj = {}
	Object.setPrototypeOf(obj, constructor.prototype)
}

var crawdaddy = new(person) 

// functions are objects in javascript that prototype belongs to as a property, 
// executes the constructor