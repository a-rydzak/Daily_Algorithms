// -------------------	Linear Solve
function Linear_F(num){
	var fibs=[0,1];

	for(i=0; i<num; i++){
		fibs.push(fibs[0]+ fibs[1]);
		fibs.shift();
	}
	return fibs[0]
}

Linear_F(6)
// -------------------	Linear Solve
function Linear_F(num){
	var fibs=[0,1];

	for(i=0; i<num; i++){
		fibs.push(fibs[i]+ fibs[i+1]);
	}
	return fibs
}

Linear_F(6)

// -------------------	Recursive Solve

function Recursive_F(num){
	if(num===1 || num===2){
		return 1
	}
	else{
		return Recursive_F(num-1)+ Recursive_F(num-2)
	}
}

Recursive_F(4)