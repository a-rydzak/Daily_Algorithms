var hash = (string, max) => {
    let hash = 0
    for (let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i)
    }
    return hash % max
}

class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
    }
}

class HashTable {
    constructor(storage_limit) {
        this.storage = []
        this.storage_limit = storage_limit // this is array_length= storage_limit-1
    }
    // check(current_node){  This needs to be fixced so that key value checking is a function and can greatly reduce the code to DRY principle
    //            if (current_node.key == key) {               
    //                if (current_node.value == value) {
    //                    console.log('Key Value Pair Is Already In this Hash Table')
    //                    return this
    //                } else {
    //                    current_node.value = value
    //                    return this
    //                }
    //            } 
    // }
    add(key, value) { //This add function add to the hash table if the key value pair is unique, if the keys are the same then it will change the orgional value to the new value entered
        var index = hash(key, this.storage_limit)
        if (this.storage[index] === undefined) {
            this.storage[index] = new Node(key, value)
        } else {
            var current_node = this.storage[index]
            while (current_node.next) {
                if (current_node.key == key) {               //start of non DRY code (need to fix)
                    if (current_node.value == value) {
                        console.log('Key Value Pair Is Already In this Hash Table')
                        return this
                    } else {
                        current_node.value = value
                        return this
                    }
                }                                          //end of non DRY code
                current_node = current_node.next
            }
            if (current_node.key == key) {
                if (current_node.value == value) {       //start of non DRY code repeated
                    console.log('Key Value Pair Is Already In this Hash Table')
                    return this
                } else {
                    current_node.value = value
                    return this
                }
            }                                           //ended of non DRY code repeated
            current_node.next = new Node(key, value)
        }
        return this
    }
   find(key,value){
   	    var index = hash(key, this.storage_limit)
   	    let current_node= this.storage[index]
   	    while(current_node){
   	    	if(current_node.key==key && current_node.value==value){
   	    		console.log("Key Pair Value Found", [previous_node, current_node])
   	    		return index
   	    	}
   	    	else{
   	    	current_node=current_node.next
   	    	}
   	    }
   	    console.log("Key Pair Value Not Found")
   	    return null
   }
   remove(key,value){  //Needs to be re worked, you arn't actually changing anything start here tomorrow!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   		let index= find(key, value)
   		if(index){
	   		let current_node= this.storage[index]
	   		let previous_node= this.storage[index]
	   		while(current_node){


	   		}
	   	}
   }
}

let hash_table = new HashTable(5)

hash_table.add("andy", "person").add("drew", "chicken").remove("drew", "chicken")