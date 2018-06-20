
class Node {
	constructor(value){
		this.value=value
		this.next=null
	}
}

class Stack {
	constructor(){
		this.length=0
		this.head=null
	}

	add(value){
		this.length++
		let new_node = new Node(value)
		if(this.head==null){
			this.head=new_node
		}
		else{
			let current_node=this.head
			while(current_node.next){
				current_node=current_node.next
			}
				current_node.next=new_node
		}
	return this
	}

	pop(){

		let current_node=this.head
		let previous_node=this.head
		if(!current_node){
			console.log("Stack Is Empty.")
			return this
		}
		while(current_node.next){
			previous_node=current_node
			current_node=current_node.next
		}
			previous_node.next=null
			this.length--
			console.log(current_node, " Was Popped. ")
			return this
	}
}

// Started TDD Here
let stack= new Stack()
stack.add(1).add(2).pop()


//vs...........................................

let stack= new Stack()
stack.add(1).add(2)

// Onject Literals


const Node = {
	next:null,
	value:function(val){
		this.value=val
	}
}

const Stack = {
	head:null,
	length:0,
	add: function(val){
		this.length++
		let new_node = Object.create(Node(val))
		if(this.head==null){
			this.head=new_node
		}
		else{
			let current_node=this.head
			while(current_node.next){
				current_node=current_node.next
			}
				current_node.next=new_node
		}
		return this
	}
}


const stack = Object.create(Stack) 

stack.add(2)

// // Started TDD Here
// let stack= new Stack()
// stack.add(1).add(2)


// class Stack {
// 	constructor(){
// 		this.length=0
// 		this.head=null
// 		this.current_node=null
// 		this.new_node=null
// 	}

// 	add(value){
// 		this.length++
// 		this.new_node = new Node(value)
// 		if(this.head==null){
// 			this.head=this.new_node
// 		}
// 		else{
// 			this.current_node=this.head
// 			while(this.current_node.next){
// 				this.current_node=current_node.next
// 			}
// 				this.current_node.next=this.new_node
// 		}
// 	return this
// 	}

// 	pop(){
// 		this.current_node=this.head
		
// 		while(current_node.value){
// 			current_node=current_node.next
// 		}
// 	}
// }






// Started TDD Here

