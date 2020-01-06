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

function areThereDuplicatesOne() {
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
function areThereDuplicatesTwo(...args) {

    const boole =  [...args].length === Array.from(new Set([...args])).length
    return !boole
    // good luck. (supply any arguments you deem necessary.)
  }

  function areThereDuplicatesThree() {
     
    return new Set(arguments).size !== arguments.length;
  }
//   console.log(areThereDuplicates(1,2,3))

// does the average exist between a pair of numbers?
function averagePair(arr, avg){
    if(arr.length === 0) return false

    let i = 0
    let left = 0
    let right = arr.length -1

    while(i<arr.length){
 
        let currentAvg = [arr[left],arr[right]].reduce((a,b)=>a+b)/2

        if(avg === currentAvg) return true

        if(currentAvg > avg) right--

        if(currentAvg < avg) left++

        // add whatever parameters you deem necessary - good luck!
        i++
    }
    return false
  }

  //   console.log(averagePair([1,2,3,4,5,6,9], 7.5))

  function isSubsequenceOne(str1, str2) {
    for(let char of str1){
        
        if (!(str2.includes(char))) return false
    }
    return true
  }

  function isSubsequenceTwo(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
  }

  function maxSubarraySum(arr, arrLen){

    if(arr.length < arrLen) return null

    let i = 0;
    let largestSum = arr.slice(0,arrLen).reduce((a,b)=>a+b,0)
    let largestArr = []
    while(i<arr.length){
        let newSum = arr.slice(i,i+arrLen).reduce((a,b)=>a+b,0)
        if(newSum>largestSum){
            largestArr = arr.slice(i,i+arrLen)
            largestSum = newSum
        }
        i++
    }
    return largestSum
    // add whatever parameters you deem necessary - good luck!
  }

//   console.log(isSubsequence('hello', 'hello world'))

// console.log(maxSubarraySum([1,99,3,4,5,6],3))

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }
console.log(minSubArrayLen([1,2,3,4,5,6], 7))


function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }

  function anyEvent(arr){

    if(arr.length === 0 ) return false
    if (arr[arr.length-1] %2 !=0){
        arr.pop()
        return anyEvent(arr)
    }

    return true
  }

  // console.log(anyEvent([1,1,1,,1,1,1,1,1,1,1,1,1,1,1]))



  // factoial recursive
  const fact = num =>{
    if(num ===1) return 1
    return num * fact(num-1)
  }

  // console.log(fact(4))


  // collect odds recursive with a helper!
  const collectOdds=(...args)=>{
    const collect = []
    const a = args
 
    const helpCollect=()=>{
      if(a.length == 0) return collect
      
      if(a[a.length-1] %2 ===0){
        collect.push(a.pop())
      }
      a.pop()
      return helpCollect(a)
    }

    helpCollect()
    return collect
  }

console.log(collectOdds(1,2,3,4))

// let t =(...args) => {
//   console.log(args)
// }
// t(1,2,3,4,5)