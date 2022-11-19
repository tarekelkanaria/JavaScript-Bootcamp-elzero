// Lessons from 23 - 26 Tasks
// Number Challenge
let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
// Smallest Number in all Variables and return integer
console.log(parseInt(Math.min(a, b, c, d))); // 2
console.log(typeof parseInt(Math.min(a, b, c, d))); // number
// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a, Math.round(d))); // 10000
// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d)); // 2
console.log(Math.floor(d)); // 2
console.log(Math.trunc(d)); // 2
console.log(+d.toFixed()); // 2
// Use Variables b + d To Get This Valus
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(typeof (Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(Math.floor(b) / Math.ceil(d))); // 67 => Number
console.log(typeof Math.round(Math.floor(b) / Math.ceil(d))); // 67 => Number

// Assignment 1
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(1e2 * 1e3); // 100000
console.log(100000.0); // 100000
console.log(1_00000); // 100000
console.log(1_00_000); // 100000
console.log(1_000_00); // 100000
console.log(10_00_00); // 100000
console.log(1e5); // 100000
console.log(100e3); // 100000
console.log(10e4); // 100000
console.log(1000e2); // 100000

// Assignment 2
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

//Assignment 3
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

//Assignment 4
let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

//Assignment 5
let num = 10;
console.log(+Number.isInteger(num) + +Number.isInteger(num)); // 2

//Assignment 6
let flt = 10.4;
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(+flt.toFixed()); // 10
console.log(Math.ceil(--flt)); // 10

//Assignment 7
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

/* To Return random floating point in range from 0 to 5 
console.log(Math.random() * 5); // 0 || 1 || 2 || 3 || 4
*/
