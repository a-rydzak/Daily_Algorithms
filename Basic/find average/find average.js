array=[1,2,3,"Jess", -1, 55]
avg=0
arr_length=0

for(var i=0; i<array.length; i++){
	if(typeof array[i]== "number"){
		avg+=array[i]
		arr_length++
	}
}

avg=avg/arr_length
console.log(avg)