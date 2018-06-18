// 

const someOrder={
	items: [
	{name: 'Cat Food', price: 8000},
	{name: 'Cat Cage', price: 800}
	]
}

const orderTotal = order => order.items
	.reduce((prev, cur) => prev + cur.price, 0)

	result = orderTotal(someOrder)