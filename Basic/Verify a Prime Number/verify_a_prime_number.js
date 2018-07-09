
//Prime number is a number greator than 1 where it's only factors are 1 and itself.

if(isPrime(2) !== true){console.log("Check 1 Fail")}
if(isPrime(3) !== true){console.log("Check 2 fail")}
if(isPrime(-2) !== false){console.log("Check 3 fail")}
if(isPrime(-3) !== false){console.log("Check 4 fail")}
if(isPrime(17) !== true){console.log("Check 5 fail")}
if(isPrime(1) !== false){console.log("Check 6 fail")}

 function isPrime(number){
 	if(number ===2){
 		return true
 	}
	if(number % 2 === 0 || number <2){
		return false
	}
	else{
		return true
	}
}

