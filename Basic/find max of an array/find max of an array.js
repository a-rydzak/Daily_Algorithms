array=[1,2,3,"Jess", -1, 55]
max=0

for(var i=0; i<array.length; i++){
	if(array[i]>max){
		max= array[i]
	}
}
console.log(max)