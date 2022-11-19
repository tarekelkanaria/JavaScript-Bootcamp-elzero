// Lessons from 27 - 30 Tasks

// String Manipulation Challenge
let a = "Elzero Web School";
// Include This Method In Your Solution [slice, charAt]
console.log(`${a.charAt(2).toUpperCase()}${a.slice(3, 7)}`); // Zero
// 8 H
console.log(a[13].toUpperCase().repeat(8)); // HHHHHHHH
// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]
// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 6)} ${a.substr(-6, 6)}`); // Elzero School
// Solution Must Be Dynamic Because String May Changes
console.log(
  `${a[0].toLowerCase()}${a.slice(1, length - 1).toUpperCase()}${a[
    a.length - 1
  ].toLowerCase()}`
); // eLZERO WEB SCHOOl

// Assignment 1
let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.substring(-1, 1).toLowerCase().repeat(3)); // eee

// Assignment 2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";
console.log(word.includes(letterZ)); // True
console.log(word.toLowerCase().startsWith(letterE)); // True
console.log(word.toUpperCase().endsWith(letterO)); // True
