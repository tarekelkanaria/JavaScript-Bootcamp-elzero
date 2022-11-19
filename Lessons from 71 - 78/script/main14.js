// Lessons from 71 - 78 Tasks

// Filter and map practice
let mixTwo = "A13BS2ZX";
let solutionTwo = mixTwo
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele)) === false;
  })
  .map(function (el) {
    return el * el;
  })
  .join("");
console.log(solutionTwo);
// Filter and Reduce practice
let removeChar = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let printWord = removeChar
  .filter(function (ele) {
    return !ele.includes("@");
  })
  .reduce(function (acc, current) {
    return (acc += current);
  });
console.log(printWord);

// Higher Order Function Challenge
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let solution = myString
  .split("")
  .filter(function (unit) {
    return unit !== "," && isNaN(parseInt(unit));
  })
  .map(function (unit) {
    return unit === "_" || unit === myString.charAt(myString.length - true)
      ? (unit = " ")
      : (unit = unit);
  })
  .reduce(function (acc, current) {
    return acc !== current ? (acc += current) : (acc = acc);
  });
console.log(solution); // Elzero Web School

// Assignment 1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let firstAssignment = mix
  .map(function (unit) {
    return typeof unit === "string" ? (unit = unit) : (unit = "");
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });
console.log(firstAssignment); // Elzero

// Assignment 2
let myStringTwo = "EElllzzzzzzzeroo";
let secondAssignment = myStringTwo.split("").filter(function (ele, index) {
  return ele !== myStringTwo[index + 1];
});
assignmentArr = secondAssignment.reduce(function (acc, current) {
  return `${acc}${current}`;
});
console.log(assignmentArr); // Elzero

// Assignment 3
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let thirdAssignment = myArray
  .reduce((acc, val) => acc.concat(val), [])
  .reduce((acc, val) => (acc += val));
console.log(thirdAssignment); // Elzero

// Assignment 4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let fourthAssignment = numsAndStrings
  .filter((ele) => typeof ele === "number")
  .map((ele) => -ele);
console.log(fourthAssignment); // [-1, -10, 10, 20, -5, -3]

// Assignment 5
let nums = [2, 12, 11, 5, 10, 1, 99];
let fifthAssignment = nums.reduce(
  (acc, current) => (current % 2 === 0 ? (acc *= current) : (acc += current)),
  1
);
console.log(fifthAssignment); // 500
