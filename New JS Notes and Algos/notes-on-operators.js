const person = { name: 'Andrew' };
const newPerson = { ...person, age: '???' };
// console.log(newPerson);

// --------------------------------------Start of nifty arrty operators
// case 1
let x = [1, 2, 3];
let y = [...x];
x[0] = 44;
// console.log(y);

// vs -------- case 2
x = [1, 2, 3, 5];
y = x;
x[0] = 44;
//console.log(y);

function sorter(...args) {
  return args.sort();
}

//console.log(sorter(1, 2, 3, 4, 5));

const filterMe = (...args) => {
  return args.filter(el => el > 5);
};

// console.log(filterMe(1, 2, 3, 4, 22));

// destructure

[a, b] = [1, 2, 3, 4, 5];

// console.log(`From [a, b] = [1, 2, 3, 4, 5]; A is ${a} amnd b is ${b}`);

var numbers = [1, 2, 3, 4, 5];

const doubleMe = numbers.map(item => item * item);

// console.log(doubleMe);

// console.log(numbers);
/*
map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/

// ------------------------------------find the numbers and return
const strr = '1.33TY,1,2,3,4,5,A';

const new_str = strr.split(',');

const filterme = arry => {
  return arry.filter(elem => !isNaN(parseInt(elem)));
};

const numberMe = arry => arry.map(item => parseInt(item));

const uniques = arry => new Set(arry);

const arrayMe = set => Array.from(set);

console.log(arrayMe(uniques(numberMe(filterme(new_str)))));

// ------------------reducer
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// console.log(array1.reduce(reducer));
// console.log(array1.reduce(reducer, 5));

//---------------------------------------callback

// const setT = (cb, time) => {
//   for (let x = 0; x < time * 3; x++) {
//     continue;
//   }
//   cb();
// };

// setT(function() {
//   console.log('3');
// }, 30000000);

// setTimeout(function() {
//   console.log('2');
// }, 3000);

// console.log('1');

//-----------------------------------------------Async custom with promises

// const two = (param, param2) => {
//   const promise = new Promise((resolve, reject) => {
//     if (param == false) {
//       reject(33);
//     }
//     for (let x = 0; x < 1000000; x++) {
//       continue;
//     }
//     resolve(param2);
//   });
//   return promise;
// };

// two(false)
//   .then(value => {
//     console.log(value);
//   })
//   .catch(err => {
//     console.log(`Error ${err}`);
//   });

// two(true).then(value => {
//   console.log(value);
// });

// console.log('1');

// async function getaller() {
//   await two(true, '1').then(value => {
//     console.log(value);
//   });
//   await two(true, '2').then(value => {
//     console.log(value);
//   });
//   console.log('3');
// }

// getaller();
//--------------------------------------------------Non blocking with callbacks and promises

getter(bb8 => bb8).then(item => {
  console.log(item);
  console.log('Webpage Loaded with data');
});

console.log('Non Blocking');

function getter(cb) {
  promise = new Promise((resolve, reject) => {
    reader('input.txt', function(err, data) {
      if (err) return reject(err);
      resolve(cb(data));
    });
  });
  return promise;
}

function reader(textFile, cb) {
  for (let x = 0; x < 100000 * 3; x++) {
    continue;
  }
  cb(false, 'all your data is here for the webpage');
}
