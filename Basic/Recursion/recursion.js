function recursiveSum(n) {
  if (n === 1) {
    return 1;
  } else {
    return rSum(n-1) + n;
  }
}

recursiveSum(3)

// Factorial

function factorial_me_timbers(num){
	if (num === 1){
		return 1
	}
	else{
		return factorial_me_timbers(num-1)*num
	}
}
factorial_me_timbers(3)

// continue







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




function rSum_except(n, except){
	console.log(except)
	if(n===1){
		return 1
	}else{
		if((n-1) === except){
			console.log(except)
			return rSum(n-2)+n
		}
		else{
			return rSum(n-1)+n
		}
	}
}

rSum(6,2)