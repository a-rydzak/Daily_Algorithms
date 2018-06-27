//Runway Reservation Syatem: schedulting problem, assume it has a single runway.
//reservation for fture landings, assume time is continous
//Constraints: Reserve requests for future landing times t
//			   add t to the set R of landing times if no other langings
//             are scheduled within k minutes

//Types of structures that can be used?
//Undorted list: everything must be done linear, must scan through entire array
//Sorted array:  requires (On) due to shifting
//Linked List: requires (On) time
//Heaps: similar (Min and Max heaps) if you want to see if an elemnt is in a heap that is < or > k
//       will take O(n) same for hash tables and dictionaries



//Need fast insertion into a sorted array (can be done with binary search trees)
//Binary needs more pointers, so more bytes are needed (up to three,parant with left/right child) this happens in logn time

//find min() is constant time in a heap because it is the root. in a BST it is length/height


//Augmented BST:  insert / modify size numbers (sub tree number, count all nodes under the node)
//                you are looking at

class Node{
	Constructor(value){
		this.value=value
		this.right=null
		this.left=null
		this.parent=null
	}
}


class BST{
	Constructor(){
		this.length=0
		this.root=null
		

	add(value){}

	find(value){}


	}
}