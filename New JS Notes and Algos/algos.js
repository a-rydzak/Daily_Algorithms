'use strict'
// const charCount = word =>{
//     const word_dictionary = {}
//     for(char of word){
//         char in word_dictionary? word_dictionary[char]+=1 : word_dictionary[char]=1
//     }
//     return word_dictionary
// }

// console.log(charCount("Andrew"))

// const anna = (word1, word2) =>{
// 	for(x in word1){
// 		if(word1[x] !== word2[word2.length - x -1]){
// 			return false
// 		}
// 	}
// 	return true
// }

// console.log(anna('anna','anna'))


// find the two nums in array that sum to 0 [-4,-3, -2, -1, 0,1,2,3,10]

// const haveZeros= arr =>{
//     arr.map(item => abs(item))
// }
const haveZeros= arr =>{

    let left = 0
    let right = arr.length-1
    
    while(left < right){
        let sum = arr[left] + arr[right]

        if(sum === 0 ){
            return [arr[left], arr[right]]
        }else if(sum >0){
            right--
            
        }else{
            left++
            
        }
    }

}

console.log(haveZeros([-4,-3, -2, -1, 0,1,2,3,10]))
