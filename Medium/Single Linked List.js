// babel.js

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
 
class Linked_List {

  constructor() {
    this.length = 0;
    this.head = null;
  }
 
  add(value) {
    var node = new Node(value)
    var current_node = this.head;

    if (!current_node) {
        this.head = node;
        this.length++;
        console.log(this)
        return this;

    }
    while (current_node.next) {
        current_node = current_node.next;
    }
      current_node.next = node;
      this.length++;
      return this;

    }
    reverse(){
      var previous_node;
      var current_node = this.head;
      var next_node;
      while (current_node){
        next_node=current_node.next;
        current_node.next=previous_node;
        previous_node=current_node;
        current_node=next_node;
      }
      this.head=previous_node;
      return this;
    }

}


// var list = new Linked_List();
// list.add(1);
// list.reverse();

// var tenses=[1,2,3,4,5]
// var [first, second, third, fourth, fifth ]  =tenses; 

function add_lists(list1, list2, list3){
  var sum=0;
  var current_a=list1.head;
  var current_b=list2.head;
  var new_list= list3;
  while(current_a && current_b){
    sum+=current_a.value + current_b.value;
    if(sum>10){
      sum-=10;
      new_list.add(sum);
      sum=1;
    }
    else{
      new_list.add(sum)
      sum=0;
    }
    current_a=current_a.next;
    current_b=current_b.next;
    if(!current_a && !current_b){
      return new_list;
    }
    // else if(current_a){
    //     list=current_a;
    // }
    // else{
    //     list=current_b;
    // }
  }
}

var list1= new Linked_List().add(1).add(2);
var list2= new Linked_List().add(1).add(2);
var list3= new Linked_List();

x=add_lists(list1, list2, list3);

// --------------------Arrow Functions

// function Person(){
//   this.age = 0;

//   setInterval(() => {
//     this.age++; // |this| properly refers to the person object
//   }, 1000);
// }

// var p = new Person();

