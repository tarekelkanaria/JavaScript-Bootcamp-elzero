// Lessons from 18 - 22 Tasks

// Challenge 1
let a = 10;
let b = "20";
let c = 80;
console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/* 
Value : 11 + 20 + 80 - 11 = 100
Explain: preincrement, addition, unary operator, post increment, addition, unary operator, post increment, minus, unary operator, post increment. 
Value : 13 + -21 + 81 - -13 + 14 = 100
Explain: preincrement, addition, unary negation, addition, unary operator, post increment, minus, unary negation, post increment, addition, unary operator. 
Value : 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1 = 100
        81 + 21 + 273 - 286 + 12 - 1 = 100
Explain: predecrement, addition, unary operator, addition, predecrement, multiplcation, unary operator, post increment, minus, unary operator, multiplay, addition, unary negation, minus, Bolean value. 
*/

// Challenge 2
let d = "-100";
let e = "20";
let f = 30;
let g = true;
console.log(-d * +e++); //2000
console.log(-d + +e * ++g + ++f); //173

// Assignment 1
console.log(10 * 20 + (15 % 3) + 190 + 10 - 400); // 0

// Assignment 2
let num = 3;
let pram = true;
// Solution One
console.log(num + num); // 6
// Solution Two
console.log(num * ++pram); // 6
// Soultion Three
console.log(num ** pram - num); // 6
// Soultion Four
console.log(num * num - num); // 6
// Solution Five
console.log((num * num + num) / pram); // 6
// Solution Six
console.log((num++ * num) / (--num - true)); // 6

// Assignment 3
let numTwo = "10";
let pramTwo = true;
// Solution One
console.log(+numTwo + +numTwo++); // 20
// Solution Two
console.log(numTwo-- + numTwo - pramTwo++); // 20
// Solution Three
console.log((numTwo * numTwo) / (pramTwo ** pramTwo + true)); // 20
// Solution Four
console.log(numTwo-- * pramTwo++); // 20
// Solution Five
console.log(--numTwo + numTwo + ++pramTwo); // 20

// Assignment 4
let points = 10;

let onePoint = true;
points += ++onePoint + true;
console.log(points); // 13

points -= onePoint + ++onePoint;
console.log(points); // 8;
