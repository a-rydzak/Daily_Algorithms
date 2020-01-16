'use strict'

const naiveSearch=(long, short) =>{
    const longLower = long.toLowerCase()
    const shortLower = short.toLowerCase()

    return (longLower.includes(shortLower))
}

const includes=(long, short) =>{
    const Long = long.toLowerCase()
    const Short = short.toLowerCase()
    let count = 0
    for(let i in Long){
        for(let j in Short){
            j = parseInt(j)
            i = parseInt(i)
            if(Short[j] === Long[j+i]) console.log(Short[j] ,Long[j+i])
            if(Short[j] !== Long[j+i]) {
                break
            }
            
            if(j === Short.length-1) count++
        }
    }

    return count
}


// console.log(naiveSearch('This is how we say HowdyHowdy','howdy'))
console.log(includes('This is how we say howdy','howdy'))