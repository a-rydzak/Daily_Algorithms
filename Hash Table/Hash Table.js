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

class Linked_List {
	constructor(){
		this.length=0
		this.head=null
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
        	//This section creates a linked list in the found index and adds the new node as the linked lists head
        	let new_node = new Node(key, value)
        	this.storage[index] = new Linked_List()
        	let linked_list= this.storage[index]
        	linked_list.head=new_node
        } else {
            var linked_list = this.storage[index]
            var current_node=linked_list.head
            while (current_node.next) {
                if (current_node.key == key) { //start of non DRY code (need to fix)
                    if (current_node.value == value) {
                        console.log('Key Value Pair Is Already In this Hash Table')
                        return this
                    } else {
                        current_node.value = value
                        return this
                    }
                } //end of non DRY code
                current_node = current_node.next
            }
            if (current_node.key == key) {
                if (current_node.value == value) { //start of non DRY code repeated
                    console.log('Key Value Pair Is Already In this Hash Table')
                    return this
                } else {
                    current_node.value = value
                    return this
                }
            } //ended of non DRY code repeated
            current_node.next = new Node(key, value)
        }
        return this
    }
    find(key, value) {
        var index = hash(key, this.storage_limit)
        let linked_list= this.storage[index]
        let current_node = linked_list.head
        while (current_node) {
            if (current_node.key == key && current_node.value == value) {
                console.log("Key Pair Value Found", current_node)
                return index
            } else {
                current_node = current_node.next
            }
        }
        console.log("Key Pair Value Not Found")
        return null
    }
    // remove(key, value) { //Needs to be re worked, you arn't actually changing anything start here tomorrow!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //     let index = find(key, value)
    //     if (index) {
    //         let current_node = this.storage[index]
    //         let previous_node = this.storage[index]
    //         console.log('1')
    //         while (current_node) {
    //         	previous_node=current_node
    //         	if(current_node==previous_node){
    //         		current_node=null
    //         		previous_node=null
    //         		console.log('2')
    //         	}
    //         	if(current_node.key==key && current_node.value==value){
    //         		console.log("3")
    //         	}
    //         	current_node=current_node.next
    //         }
    //     }
    // }
    remove(key, value) {
        var index = hash(key, this.storage_limit)
        let linked_list= this.storage[index]
        let current_node = linked_list.head
        let previous_node = linked_list.head
        while (current_node) {
        	previous_node=current_node
        	if(current_node.key==key && current_node.value == value && current_node==linked_list.head && !current_node.next){
        		console.log(current_node,'wasd removed')
        		linked_list.head=null
        		return this
            }
            if(current_node.key==key && current_node.value == value){
            	previous_node.next=current_node.next
            	console.log(current_node,'was removed')
            	current_node=null
            	return this
            }
   		}
   		console.log('Key and Value were not found and therefore not removed')
   		return this
	}
}

let hash_table = new HashTable(5)

hash_table.add("andy", "person").add("drew", "chicken").find("drew", "chicken").remove("drew", "chicken")