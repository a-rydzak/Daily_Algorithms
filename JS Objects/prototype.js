function talk (sound) {
	console.log(this)
	console.log(this.sound)
}



let animal ={
	talk
}

let cat = {
	sound: 'Meow'
}

let dog ={
	sound: 'Woofering'
}

let prarieDog = {
	howl: function(){
		console.log(this.sound.toUpperCase())
	}
}

// cat.talk()

Object.setPrototypeOf(cat, animal)
Object.setPrototypeOf(dog, animal)

cat.talk()

dog.talk()

animal.talk=function(){
	console.log('A am an animal that says ' + this.sound + '.')
}
Object.setPrototypeOf(prarieDog, dog)
prarieDog.howl()

cat.talk()