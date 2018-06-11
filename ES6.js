
// Declared then callled: Immediately Invoked Expression
(function(){
	for(i=0; i<5; i++){
		console.log(i)
	}
})()

console.log('After Loop', i)

//--------------Vs. this
(function(){
	for(let i=0; i<5; i++){
		console.log(i)
	}
})()

console.log('After Loop', i)

//--------------Vs. this
"use strict";
(function(){
	for(i=0; i<5; i++){
		console.log(i)
	}
})()

console.log('After Loop', i)

// -------------- vs.
"use strict";
// should be i=7832403270932;
i=7832403270932 
(function(){
	for(i=0; i<5; i++){
		console.log(i)
	}
})()

console.log('After Loop', i)

// ---------------------------------------------Const Practice

const x=[1,2,3,4]

x=[1,2]
console.log(x)