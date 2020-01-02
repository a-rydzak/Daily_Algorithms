
//-----------------------------With Promises
const one =()=>{
	const promise = new Promise((resolve,reject)=>{
		setTimeout(()=>{resolve(console.log('a'))}, 5000);
	});
	return promise;
};
const two =()=>{
	const promise = new Promise((resolve,reject)=>{
		setTimeout(()=>{resolve(console.log('b'))}, 1000);
	});
	return promise;
};
// const getAll =async()=>{
// 	let uno = await one();
// 	let dos = await two();
// 	console.log(`This is ${uno} this is ${dos}`)
// }

const getAll= ()=>{
	for(let i=0; i<20;i++){
		two()
	}
}


getAll();


//-----------------------------With Async Await
const one =()=>{
	const promise = new Promise((resolve,reject)=>{
		setTimeout(()=>{resolve(console.log('a'))}, 5000);
	});
	return promise;
};

const two =()=>{
	const promise = new Promise((resolve,reject)=>{
		setTimeout(()=>{resolve(console.log('b'))}, 1000);
	});
	return promise;
};
// const getAll =async()=>{
// 	let uno = await one();
// 	let dos = await two();
// 	console.log(`This is ${uno} this is ${dos}`)
// }

const getAll= async()=>{
	for(let i=0; i<20;i++){
		await two()
	}
	
}

getAll();


