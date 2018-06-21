
// // sample code
// var Queue = (function(){
//   function Queue() {
//     this.dataStore = [];
//     this.back = 0;
//   }
//   Queue.prototype.enqueue = function(item) {
//     this.dataStore[this.back] = item;
//     this.back++;
//   }
//   Queue.prototype.dequeue = function() {
//     var output = this.dataStore[0];
//     for(var i = 1; i < this.back; i++) {
//       this.dataStore[i - 1] = this.dataStore[i];
//     }
//     this.back--;
//     return output;
//   }
//   Queue.prototype.display = function() {
//     for(var i = 0; i < this.back; i++) {
//       console.log(this.dataStore[i]);
//     }
//   }
//   return Queue;
// })();
// module.exports = Queue;



// var Queue = require('./queue');
// var queue = new Queue();
// queue.enqueue("Bird");
// queue.enqueue("Magic");
// queue.enqueue("Jordan");
// queue.enqueue("Kobe");
// queue.enqueue("Shaq");
// queue.display();
// console.log("You can stop waiting Bird");
// queue.dequeue();
// queue.display();

class Node = function(value){
  this.value=value
  this.next=null
}

class Stack=function(){
  this.length=0
  this.head=0
}

// vs.....

class Node  {
  constructor(value){
    this.value=value
    this.next=null
  }
}

class Que{
  constructor(){
    this.length=0
    this.head=null
  }

  add(value){
    this.length++
    let new_node= new Node(value)
    if(this.head==null){
      this.head=new_node
      return this
    }
    else{
      let current_node=this.head
      while(current_node.next){
        current_node=current_node.next
      }
      current_node.next=new_node
      return this
    }
  }

  pop(){
    if(!this.head){
      console.log('This Que is empty')
      return this
    }
    let current_node=this.head
    let prevous_node=this.head
    if(this.head && current_node.next){
      this.head=current_node.next
      prevous_node.next=null
    }
    else{
      this.head=null
    }
    this.length--
    return this
  }
}

let que= new Que

JSON.stringify(que.add(1).add(2).pop().pop().pop())

