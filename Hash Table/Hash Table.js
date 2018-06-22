


var hash = (string, max) => {
	let hash =0
	for(let i=0; i<string.length; i++){
		hash+= string.charCodeAt(i)
	}
	return hash % max
}

class Node{
	constructor(key, value){
		this.key=key
		this.value=value
		this.next=null
	}

}

class HashTable {
	constructor(){
		this.storage=[]
		this.storage_limit=4
		this.items=0
	}

	add(key, value2){
		let index=hash(key, this.storage_limit)
		if(this.storage[index]===undefined){
			this.storage[index]= new Node(key, value)
		}
		else{
			let changed=false
			let current_node=this.storage[index]
			while(current_node.next){
				if(current_node.key==key){
					current_node.value=value
					console.log('Happening')
					return this
				}
				current_node=current_node.next
			}
			current_node.next= new Node(key, value)
		}
		return this
	}
}

let hash_table = new HashTable

hash_table.add("andy","person").add("andy","chicken")