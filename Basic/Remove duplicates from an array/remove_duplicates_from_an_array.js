
if (dublicate_verification([1,2,3,4,5,6]) !== true)(console.log("Check 1 Has Failed"))
if (dublicate_verification([1,2,7,7,6,6]) === true)(console.log("Check 2 Has Failed"))
if (dublicate_verification([1,2,3,4,6,1]) === true)(console.log("Check 3 Has Failed"))
if (dublicate_verification([1,2,3,4,5,6,7,8,9,10]) !== true)(console.log("Check 4 Has Failed"))
if (dublicate_verification([1,2,2,3]) === true)(console.log("Check 5 Has Failed"))

if(are_arrays_equal(remove_duplicates([1,2,3,4,4]), [1,2,3,4]) != true ){console.log("Check 6 Has Failed")}
if(are_arrays_equal(remove_duplicates([1,2,3]), [1,2,3]) != true ){console.log("Check 7 Has Failed")}
if(are_arrays_equal(remove_duplicates([7,2,3,4,5,6,7]), [2,3,4,5,6,7]) != true ){console.log("Check 8 Has Failed")}
	if(are_arrays_equal(remove_duplicates([7,7,7,2,3,4,5,7,6,7]), [2,3,4,5,6,7]) != true ){console.log("Check 9 Has Failed")}

var array_index


function dublicate_verification(array){
	let count=1
	for(let i=0; i<array.length; i++){
		for(let j=count; j<array.length; j++){
			if(array[i] == array[j]){
				array_index=j
				return array_index
			}
		}
		count++
	}
	return true
}



function remove_duplicates(array){
	while (dublicate_verification(array) !== true){
		let temp_value = array[array.length-1]
		array[array.length]=array[array_index]
		array[array_index]=temp_value
		array.length=array.length-2
	}
	let arr=sort_values(array)
	return arr
}


function are_arrays_equal(array1, array2){
	for(let i =0; i< array1.length; i++){
			if(array1[i] != array2[i]){
			return false
		}
	}
	return true
}

function sort_values(array){
	let temp
	let count =0
	let proceed=true
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
	}
	return array
}






