// map, filter/find(returns first item), reject- all transform a list


var orders =[
	{amount: 100},
	{amount: 100},
	{amount: 100},	
	{amount: 100},
	{amount: 100}
]

const reducer = (accumulator, currentValue) => accumulator + currentValue.amount;

let total = orders.reduce(reducer, 0)// reduce wants an object

total


//OR 



var orders =[
	{amount: 100},
	{amount: 100},
	{amount: 100},	
	{amount: 100},
	{amount: 100}
]
let totalOrdersAmount= orders.reduce(function(sum, order){
	console.log("Echo", sum, order)
	return sum + order.amount
}, 0)

console.log(totalOrdersAmount)

let totalOrdersAmount= orders.reduce((sum, order) => {
	sum + order.amount
}, 0)
