// Lessons from 123 to 133 Tasks

// Map And Set Challenge
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log(
  +Object.keys({ ...n2 })
    .reverse()
    .join("")
); //210

// Assignment 1
const setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers); // Set(3) {10, 20, 2}
console.log(setOfNumbers.size - 1); // 2

// Assignment 2
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log([...(setNames = new Set(myFriends))].sort());
// (4)[("Ahmed", "Mahmoud", "Osama", "Sayed")];

// Assignment 3
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
const infoMap = new Map(Object.entries(myInfo));
console.log(infoMap); // Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
console.log(infoMap.size); // 3
console.log(infoMap.has("role")); // true

// Assignment 4
let theNumber = 100020003000;
console.log(
  +Array.from((setNum = new Set([...theNumber.toString()])), (ele) =>
    ele > 0 ? ele : ""
  ).join("")
); // 123;

// Assignment 5
let theName = "Elzero";
// method 1
console.log([...theName]); // ["E", "l", "z", "e", "r", "o"];
// method 2
console.log(Array.from(theName)); // ["E", "l", "z", "e", "r", "o"];
// method 3
console.log(Array.of(...theName)); // ["E", "l", "z", "e", "r", "o"];
// method 4
console.log(theName.split("")); // ["E", "l", "z", "e", "r", "o"];
// method 5
const [...letters] = theName;
console.log(letters); // ["E", "l", "z", "e", "r", "o"];

// Assignment 6
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
let numLength = chars.filter((ele) => typeof ele === "number").length;
let sorted = chars.sort((a) => (typeof a === "number" ? -1 : 1));
console.log(sorted.copyWithin(0, numLength, numLength + numLength));
// First test case ["A", "B", "C", "A", "B", "C", "D", "E"];
// Second test case ["A", "B", "C", "D", "A", "B", "C", "D", "E"];
// Third test case ["Z", "Y", "Z", "Y", "A", "D", "E"];

// Assignment 7
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log(numsOne.concat(numsTwo)); // [1, 2, 3, 4, 5, 6];
console.log([...numsOne, ...numsTwo]); // [1, 2, 3, 4, 5, 6];
console.log([numsOne, numsTwo].flat()); // [1, 2, 3, 4, 5, 6];
