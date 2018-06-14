
// Creates a new Object witht the prototype set to a cartain object

const cat ={
	makeSound: function(){
		console.log(this.sound)
	}
}
const boo = Object.create(cat) //like Object.setPrototypeOf(b00, cat)
boo.sound ="Meeeeoooooooowww"
boo.makeSound()
boo