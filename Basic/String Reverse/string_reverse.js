

if(reverse_string('string') !== 'gnirts'){console.log('Error Check 1')}

if(reverse_string('hey') !== 'yeh'){console.log('Error Check 2')}


function reverse_string(string){
	let str=''
	for(let i=0; i<string.length; i++){
		str+=string[string.length-1-i]
	}
	console.log(str)
	return str
}
