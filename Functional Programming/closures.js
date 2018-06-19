//function body has acces to variables outside the function

let me = 'Bruce Davis'

greetMe = () => console.log('hello')

greetMe()


let me = 'Bruce Davis'

let greetMe = () => console.log('hello', me) // can all this because javascript has closures otherwise
//you would have to pass in me to the function

greetMe() // ajax functions can pull variables from outside it's scope