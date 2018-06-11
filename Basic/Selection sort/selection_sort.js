var array=[23,42,4, 16, 8, 15];

const selection_sort= (arr) => {
	var low_val=arr[0];
	var temp;
	var count=0
	var proceed=true
	while(proceed){
		proceed=false;
		for(var i=0; i<arr.length; i++){
			if(arr[count]< arr[i]){
				temp=arr[count];
				arr[count]=arr[i];
				arr[i]=temp;
				proceed=true;
			}	
		} 
		count++
	}
	console.log(arr)
	console.log(count)
}

selection_sort(array)

