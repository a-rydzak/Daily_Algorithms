


var hash = (string, max) => {
	let hash =0
	for(let i=0; i<string.length; i++){
		hash+= string.charCodeAt(i)
	}
	return hash % max
}


class HashTable {
	constructor(){
		this.storage=[]
		this.storage_limit=4
		this.items=0
	}

	add(key, value){
		this.items++
		let index=hash(key, this.storage_limit)
		if(this.storage[index]===undefined){
			this.storage[index]=[key, value]
			console.log( this.storage)
		}
		else{
			let inserted = false
			for(let i =0; i< this.storage[index].length; i++){
				if(this.storage[index][i][0]===key){
					storage[index][i][1]=value
					inserted= true
				}
			}
			if(inserted===false){
				this.storage[index].push([key,value])
			}
		}
		return this
	}
}

let hash_table = new HashTable

hash_table.add("andy","person").add("billy June","person").add('killer croc', 'alliogatoritomis')