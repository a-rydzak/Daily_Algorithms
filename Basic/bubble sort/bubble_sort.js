// bubble Sort

var array=[6,7,4,9,8,1,2];

var temp;
var count =0
var proceed=true
while(proceed){
  proceed = false;
  for(var i =0; i<array.length; i++){
    if(array[i]> array[i+1]){
      temp=array[i]
      array[i]= array[i+1]
      array[i+1]=temp
      proceed= true
      
    }
  }
  count++
}
console.log(array)
console.log(count)
