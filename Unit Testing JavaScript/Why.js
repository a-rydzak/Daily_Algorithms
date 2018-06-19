// Development technique, divide software into isolated units, write utomatred tests to verify the units work as expected
// keep complexity from getting overwhelming

// more useful with logic paths rather than simple and linear logic
//

const someOrder= {
	items: [
		{name: 'Cat Food', price: 80, quantity: 3},
		{name: 'Cat Cage', price: 9000, quantity: 8},
		{name: 'Shipping', price:10, shipping: true}
		// {name: 'Foot Flop', price: 'Priceless'}
	]
}

const orderResult =order => order.items
	.reduce((sum, current) => sum + (current.price*current.quantity) 0)

result = orderResult(someOrder)

//vs......................................................USE TDD Development
// Code starts simple but does not stay that way

const someOrder= {
	items: [
		{name: 'Cat Food', price: 80, quantity: 3},
		{name: 'Cat Cage', price: 9000, quantity: 8},
		{name: 'Shipping', price:10, shipping: true}
		// {name: 'Foot Flop', price: 'Priceless'}
	]
}

const orderResult = order => {
	const totalItems = order.items
		.filter(x=> !x.shipping)
		.reduce((sum, current) => sum + (current.price * current.quantiry),0)
	const shippingItem =
		order.items.find(x=> !!x.shipping)
	const shipping =
		totalItems > 1000 ? 0 : shippingItem.price
	return totalItems + shipping
}

result= orderResult(someOrder)