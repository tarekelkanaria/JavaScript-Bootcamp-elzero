// Lessons from 40 - 47 Tasks
// Arrays Challenge
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

let myArray = my.slice(zero, ++counter).reverse();
console.log(myArray); // ["Osama", "Elham", "Mazero", "Ahmed"];
let myArray2 = my.slice(++zero, --counter).reverse();
console.log(myArray2); // ["Elham", "Mazero"]
console.log(
  `${myArray2[--zero].slice(zero, --counter)}${myArray2[++zero].slice(counter)}`
); // "Elzero"
console.log(
  `${myArray2[zero][myArray2[zero].length - ++zero]}${myArray2[--zero][
    myArray2[zero].length - zero
  ].toUpperCase()}`
); // "rO"

// Assignment 1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// Method 2
console.log(myFriends.slice("", num)); // ["Ahmed", "Elham", "Osama"];

// Assignment 2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.pop(friends.shift());
console.log(friends); // ["Eman", "Osama"]

// Assignment 3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// Assignment 4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(
  words[words.length - true][0].slice(words.length - true).toUpperCase()
); // ZERO

// Assignment 5
let needle = "JS";
let haystack = ["PHP", "JS", "CSS", "Python"];
// Solution 1
if (haystack.indexOf(needle) >= 0) {
  console.log("Found");
} else {
  console.log("Not Found");
}
// Solution 2
if (haystack.lastIndexOf(needle) >= 0) {
  console.log("Found");
} else {
  console.log("Not Found");
}
// Solution 3
if (haystack.includes(needle)) {
  console.log("Found");
} else {
  console.log("Not Found");
}

// Assignment 6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
allArrs = arr1.concat(arr2).sort();
allArrs = allArrs.slice(-arr1.length).join("").toLowerCase();
console.log(allArrs); // fxy
