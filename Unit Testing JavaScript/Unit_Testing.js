// Test First Approach, only write enough code for a test to pass
if (orderTotal({ 
	items:[
		{name: 'Cat Food', price: 8},
		{name: 'Cat Cage', price: 8}
	]
}) !== 16){
	throw new Error('Check Fail')
}


// ----result is orderTotal is not defined



function orderTotal(){

}

// ----result is orderTotal is 'Check Fails'

function orderTotal(){
	return 16
}	

// ----result is  undefined because test passes

//write the test first in order to write actually write the tests
// after the fact you have to analyze the code and jurassic park the code tests


//---------------------------------------------Now Increase the tests

if (orderTotal({ 
	items:[
		{name: 'Cat Food', price: 8},
		{name: 'Cat Cage', price: 8}
	]
}) !== 16){
	throw new Error('Check Fail 1')
}



if (orderTotal({ 
	items:[
		{name: 'Cat Food', price: 8},
		{name: 'Cat Tower', price: 16}
	]
}) !== 32){
	throw new Error('Check Fail 2')
}

// function orderTotal(){
// 	return 16
// }

// ----result is orderTotal is 'Check Fails'

function orderTotal(order){
	
}	

// ----result is orderTotal is 'Check Fails 2'

//---------------------------------------------Now Pass Both Tests

if (orderTotal({ 
	items:[
		{name: 'Cat Food', price: 8},
		{name: 'Cat Cage', price: 8}
	]
}) != 16){
	throw new Error('Check Fail 1')
}



if (orderTotal({ 
	items:[
		{name: 'Cat Food', price: 8},
		{name: 'Cat Tower', price: 16}
	]
}) != 24){
	throw new Error('Check Fail 2')
}

// function orderTotal(){
// 	return 16
// }

// ----result is orderTotal is 'Check Fails'

// function orderTotal(order){
// 	let final=order.items.reduce(function(sum, current){ sum + current.price},0)
// 	console.log(final)
// 	return final
// }	

function orderTotal(order){

	// return order.items.reduce(function(sum, current){ return (sum + current.price)}, 0)
	return order.items.reduce((sum, current) => sum + current.price, 0)
}	




