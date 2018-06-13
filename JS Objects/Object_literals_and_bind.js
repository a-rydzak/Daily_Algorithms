// 4  main engines use javascript that are standardized by ES5/ES6 and so on.
// There is no right way to go about object creation

// Javascript is a functional and object oriented


//-----------------------Object Literal Cat
let cat={
	sound: 'Meow',
	talk: function(){
		console.log(this.sound)// if this.sound, can be cat.soundthe talkFunction() will not work, see below
	},
	emote: () =>{
		console.log('Purr, Purr, Purr')
	}
	
}

// let Tiger=cat
// Tiger.talk()
// Tiger.emote()

let talkFunction = cat.talk
talkFunction() //This will be undefined/ throw an error/ Object oriented clashes with functional aspects
// this happens because this.sound does not reference the cat anymore
let boundFunction=talkFunction.bind(cat)
boundFunction() //after a bind occurs the boundFunction will call the approperiate this



// Another bind example

let button = document.getElementById('myButton')

button.addEventListener(
	'click',
	 cat.talk.bind(cat) // without the bind the this will refer to the window 
	 					//with bind it now refers to the cat.  
)
