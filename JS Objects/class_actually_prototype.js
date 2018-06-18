// Class does not exist.  It is just prototype

class Andrew{
	constructor(){
		this.name='Andrew'
	}
}

let boy = new Andrew()

boy

boy.__proto__



//----------------------vs

let patrick = {
	name:'patrick'
}

let boy = Object.create(patrick)


boy.name

boy.__proto__