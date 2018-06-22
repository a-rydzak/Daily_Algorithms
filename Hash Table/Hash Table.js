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
    constructor() {
        this.storage = []
        this.storage_limit = 4
        this.items = 0
    }
    // check(current_node){  This needs to be fixced so that key value checking is a function and can greatly reduce the code to DRY principle
    // 	if(current_node.key==key){
    // 		current_node.value=value
    // 		console.log('Happening')
    // 		return this
    // 	}
    // }
    add(key, value) { //This add function add to the hash table if the key 
        //value pair is unique, if the keys are the same then it will change the 
        //orgional value to the new value entered
        var index = hash(key, this.storage_limit)
        if (this.storage[index] === undefined) {
            this.storage[index] = new Node(key, value)
        } else {
            var current_node = this.storage[index]
            while (current_node.next) {
                if (current_node.key == key) {
                    if (current_node.value == value) {
                        console.log('Key Value Pair Is Already In this Hash Table')
                        return this
                    } else {
                        current_node.value = value
                        return this
                    }
                }
                current_node = current_node.next
            }
            if (current_node.key == key) {
                if (current_node.value == value) {
                    console.log('Key Value Pair Is Already In this Hash Table')
                    return this
                } else {
                    current_node.value = value
                    return this
                }
            }
            current_node.next = new Node(key, value)
        }
        return this
    }
}

let hash_table = new HashTable

hash_table.add("andy", "person").add("andy", "chicken").add("andy", "chicken")