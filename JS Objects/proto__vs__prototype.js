// Demonstration of assignment vs prototype


let cat={
 	breed: 'Maine Coon'
}

let myCat= cat

cat.name='Boo'

console.log(myCat.name)


// -------------vs


let cat={
 	breed: 'Maine Coon'
}

let myCat= {name: 'Boo Coon'}
Object.setPrototypeOf(myCat, cat)

console.log(cat.name)
console.log(myCat.name)

// Now __proto__

myCat.__proto__

cat.tail='Big Tail'
cat['paw']='Massive'

myCat.__proto__

myCat.paw
