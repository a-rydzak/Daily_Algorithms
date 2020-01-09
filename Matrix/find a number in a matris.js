//Test driven development practince

// try { 
// 	if(find(2) !=true ) throw "Test Not Passed";
// }
// catch(err) {
//     console.log(err)  
// }


const M =[[1,2,3],
	    [1,3,5],
	    [2,7,8],
	    [7,9,4]
]


 
if (find(2, M) !== true){
	throw new Error('Check Fail 1')
}

if (find(10, M) !== false){
	throw new Error('Check Fail 2')
}

if (find(0, M) !== false){
	throw new Error('Check Fail 3')
}

if (find(9, M) !== true){
	throw new Error('Check Fail 4')
}



function find(num, matrix){
	for (var i=0; i<matrix.length; i++){
		for(var j=0; j<matrix[i].length; j++){
			if(matrix[i][j] === num){
				return true
			}
		}
	}
	return false
}







