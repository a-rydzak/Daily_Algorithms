// talk = (sound) => {
// 	console.log(this.sound)
// }

// talk('I am talking here')
// talk(1233)


// ---------------------------------------

//  let talk =  () => {
// 	// console.log(this)//right now the this refers to the global object, the window
// 	console.log(this.sound)
// }


// -------------------------
function talk(){
	// console.log(this)//right now the this refers to the global object, the window
	console.log(this.sound)
}

function foot_flops(){
	console.log(this.foot_emote)
}

// talk()



let cat = {
	// speak: talk.bind(cat),
	foot_flops: foot_flops,
	sound: 'I am a talking cat now.',
	foot_emote:'Koshka is a foot a floppin!'
}

cat.speak =talk.bind(cat)

let bind_cat_sound = talk.bind(cat)

bind_cat_sound()

cat.speak()// says the cat sound because the cat is calling the function. This part
			// of how to seperate things by functions vs material (what they are)

let blab = cat.speak
blab()

cat.foot_flops()

let koshka_flop = foot_flops.bind(cat) //Binding a function to another variable
koshka_flop()

// this is context sensative because it can be called through many 'this'