'use strict'
const list = [1, 2, 3, 4, 5, 6, 6, 6, 7]
const set = new Set(list)

console.log(set)

//  rev a string
const rev = word => {

 word = word.split('')

 let last = ''

 for (let i = 0; i < word.length / 2; i++) {

  last = word[word.length - i - 1]
  word[word.length - i - 1] = word[i]
  word[i] = last
 }

 word = word.join('')
 return word
}

console.log(rev("its a brick"))