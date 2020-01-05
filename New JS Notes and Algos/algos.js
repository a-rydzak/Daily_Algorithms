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

// console.log(haveZeros([-4,-3, -2, -1, 0,1,2,3,10]))


const getUniques= arry =>{
    return new Set(arry).size
}

// console.log(getUniques([1,2,3,3,3,4,5,6]))

// aquire largest conc sum of 2 nums in an array given [9,1,2,3]
// console.log([9,1], 10)

const concecTwo = arr =>{
    
    let i = 0
    let testArr = arr.splice(0,2)
    let retArr = arr.splice(0,2)
    let oldSum = retArr.reduce((a, b) => a + b,0)
    

    while(i<arr.length){
        testArr = arr.splice(i,i+2)
        let newSum = testArr.reduce((a, b) => a + b,0)
        if(newSum>oldSum){
            
            retArr = testArr
        }
        i++
    }
    return retArr

}

// console.log(concecTwo([101,1,20,1,22,1,1,9,99]))

// Do these numbers contain the same frequency???
function sameFrequency(num1, num2){
    
    const dictOne = {}

    const dictTwo = {}

    for(let char of num1.toString()){

        char in dictOne? dictOne[char]+=1: dictOne[char]=1
    }

    for(let char of num2.toString()){

        char in dictTwo? dictTwo[char]+=1: dictTwo[char]=1
    }

    if(JSON.stringify(dictOne) === JSON.stringify(dictTwo)) return true

    return false
}
  
// console.log(sameFrequency(34, 14))

function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }
// find all duplicates
// function areThereDuplicates(...args) {

//     const boole =  [...args].length === Array.from(new Set([...args])).length
//     return !boole
//     // good luck. (supply any arguments you deem necessary.)
//   }

  console.log(areThereDuplicates(1,2,3))