// Lessons from 147 to 158 Tasks
import calc from "./mod-one.js";
import * as modOne from "./mod-one.js";
// Assignment 1
let myBirth = new Date("3 27 1993");
let myLifeTime = new Date().getTime() - myBirth.getTime();
// The result changes over time
console.log(`${(myLifeTime / 1000).toFixed()} Seconds`); // 935886977 Seconds
console.log(`${(myLifeTime / 1000 / 60).toFixed()} Minutes`); // 15598116 Minutes
console.log(`${(myLifeTime / 1000 / 60 / 60).toFixed()} Hours`); // 259969 Hours
console.log(`${(myLifeTime / 1000 / 60 / 60 / 24).toFixed()} Days`); // 10832 Days
console.log(`${(myLifeTime / 1000 / 60 / 60 / 24 / 30).toFixed()} Months`); // 361 Months
console.log(`${(myLifeTime / 1000 / 60 / 60 / 24 / 365).toFixed()} Years`); // 30 Years

//Assignment 2
let dateAfterTen = new Date(0);
dateAfterTen.setFullYear(dateAfterTen.getFullYear() + 10);
dateAfterTen.setHours(0, 0, 1);
console.log(dateAfterTen);
// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
// Other solution
let dateTen = new Date("1 jan 1980");
dateAfterTen.setHours(0, 0, 1);
console.log(dateAfterTen); // "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

// Assignment 3
let lastMonth = new Date();
let monthsArr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
lastMonth.setMonth(3, 30);
lastMonth.setHours(18, 13, 20);
console.log(lastMonth); // "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
console.log(
  `Previous Month Is ${
    monthsArr[lastMonth.getMonth()]
  } And Last Day Is ${lastMonth.getDate()}`
); // "Previous Month Is April And Last Day Is 30"

// Assignment 4
let birthDay1 = new Date("3 27 93");
let birthDay2 = new Date("93-3-27");
let birthDay3 = new Date("1993-03-27T00:00:00");
console.log(birthDay1); // "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
console.log(birthDay2); // "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
console.log(birthDay3); // "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"

// Assignment 5
let begin = performance.now();
for (let i = 1; i < 100000; i++) {
  console.log(i);
}
let end = performance.now();
console.log(`Loop Took ${Math.floor(end - begin)} Milliseconds.`);
("Loop Took  4549 Milliseconds.");

// Assignment 6
function* gen() {
  let param = 14;
  let first = param;
  yield param;
  param *= 10;
  yield (first += param);
  while (true) {
    param += 200;
    yield (first += param);
  }
}
let generator = gen();
console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

// Assignment 7
function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  // other solution to make one set in generator function
  //   yield* genNumbers();
  yield* ["A", "B", "B", "B", "C", "D"];
}
function* genAll() {
  let set = new Set(genNumbers());
  let letterSet = new Set(genLetters());
  yield* set;
  yield* letterSet;
}
let generator2 = genAll();
console.log(generator2.next()); // {value: 1, done: false}
console.log(generator2.next()); // {value: 2, done: false}
console.log(generator2.next()); // {value: 3, done: false}
console.log(generator2.next()); // {value: 4, done: false}
console.log(generator2.next()); // {value: 5, done: false}
console.log(generator2.next()); // {value: "A", done: false}
console.log(generator2.next()); // {value: "B", done: false}
console.log(generator2.next()); // {value: "C", done: false}
console.log(generator2.next()); // {value: "D", done: false}

// Assignment 8
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
