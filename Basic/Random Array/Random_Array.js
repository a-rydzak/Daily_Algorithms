
array=[0,1,2,3,4,5,6]


function shift_left(array, times){
 while(times!=0){
	array_2=[0]
	temp=array[0]
	for(var i=1; i<array.length; i++){
		array_2[i-1]=array[i]
	}
	array_2[array_2.length]=temp
	array=array_2
	times--
  }
	console.log(array)
}

shift_left(array, 2)



