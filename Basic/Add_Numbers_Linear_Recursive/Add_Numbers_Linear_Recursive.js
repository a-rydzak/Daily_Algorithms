// #2 Needs to be fixed



//#1: Add All Numbers Except the Exception Number accomplished linearly. EX: Add 6..1 except 2 = 19
function sum_except(sum_num, except){
		adder=sum_num
		while(adder!=0){
			adder--
			if(adder == except){
				continue
			}
			sum_num+=adder
		}
	console.log(sum_num)
}

sum_except(6, 2)



// Add All Numbers Except the Exception Number accomplished recursively. EX: Add 6..1 except 2 = 19

function rSum_except(n, except){
	// console.log(except, "1")
	if(n===1){
		return 1
	}
	// console.log(except, "2")
	if((n-1) == except){
			// console.log(except, "3")
			return rSum_except(n-2, except)+n
		}
	else{
		return rSum_except(n-1, except)+n
	}
}


rSum_except(6,2)


// This works, for the 6 case exclude 2 recursively.
function rSum_except(n){
	// console.log(except, "1")
	if(n===1){
		return 1
	}
	// console.log(except, "2")
	if((n-1) == 2){
			// console.log(except, "3")
			return rSum_except(n-2)+n
		}
	else{
		return rSum_except(n-1)+n
	}
}


rSum_except(6)