
class Node{
	constructor(value){
		this.value=value
		this.right=null
		this.left=null
	}
}


class Tree{
	constructor(){
		this.root=null
		this.length=0
	}

	add(value){
		this.length++
		let new_node= new Node(value)
		if(!this.root){
			this.root=new_node
			return this
		}
		let current_node=this.root
		let previous_node=this.root
		while(current_node){
			previous_node=current_node
			if(new_node.value>current_node.value){
				current_node=current_node.right
			}
			else{
				current_node=current_node.left
			}
		}
		if(new_node.value>previous_node.value){
			previous_node.right=new_node
			return this
		}
		else{
			previous_node.left=new_node
			return this
		}
	}
	find(value){
		let current_node=this.root

		while(current_node){

			if(value===current_node.value){
				return current_node
			}
			if(value>current_node.value){
				current_node=current_node.right
			}
			else{
				current_node=current_node.left
			}
		}
		console.log('Node Not Found in this tree seen below')
		return this
	}
	pop(value){
		let current_node = this.find(value)
		let 
	}
}

let tree = new Tree()

JSON.stringify(tree.add(3).add(7).add(6).add(8).add(2).add(1).find(33))

