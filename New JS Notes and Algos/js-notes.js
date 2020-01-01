'use strict'
const {performance} = require('perf_hooks');
const list = [1, 2, 3, 4, 5, 6, 6, 6, 7]
const set = new Set(list)

//  reverse a string one method
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

//  reverse a string another method
const rev2 = word =>{
    let new_word = ''
    for(let i = word.length-1; i>-1;i--){
        new_word += word[i]
    }
    return new_word
}


const t1 = performance.now()
rev2("its a brick")
const t2 = performance.now()
console.log(t2-t1)

