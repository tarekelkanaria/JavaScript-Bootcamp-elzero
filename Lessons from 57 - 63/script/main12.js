// Lessons from 57 - 63 Tasks
// Random arguements function challenge
function showDetails(a, b, c) {
  let name = "";
  let age = 0;
  let status = "";
  let details = [a, b, c];
  for (let i = 0; i <= details.length; i++) {
    typeof details[i] === "string"
      ? (name = details[i])
      : typeof details[i] === "number"
      ? (age = details[i])
      : details.includes(true)
      ? (status = "You Are Available For Hire")
      : (status = "You Are Not Available For Hire");
  }
  console.log(`Hello ${name}, Your Age is ${age}, ${status}`);
}
showDetails("Osama", 38, true); // 'Hello Osama, Your Age is 38, You Are Available For Hire'
showDetails(38, "Osama", true); // 'Hello Osama, Your Age is 38, You Are Available For Hire'
showDetails(true, 38, "Osama"); // 'Hello Osama, Your Age is 38, You Are Available For Hire'
showDetails(false, 38, "Osama"); // 'Hello Osama, Your Age is 38, You Are Not Available For Hire'

// Assignment 1
function sayHello(theName, theGender = "") {
  if (theGender.toLowerCase().startsWith("f") === true) {
    theGender = " Miss";
  } else if (theGender.toLowerCase().startsWith("m") === true) {
    theGender = " Mr";
  }
  console.log(`Hello${theGender} ${theName}`);
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// Assignment 2
function calculate(
  firstNum,
  secondNum = "Second Number Not Found",
  operation = "add"
) {
  if (secondNum === "Second Number Not Found") {
    console.log(secondNum);
  } else if (operation === "add") {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  }
}
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

// Assingment 3
function ageInTime(theAge) {
  if (theAge > 10 && theAge <= 100) {
    let unitsCount = [12, 4, 7, 24, 60, 60];
    let unitsGenre = ["Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"];
    let ageCount = theAge;
    let unitName = "";
    for (let i = 0; i < unitsCount.length; i++) {
      ageCount *= unitsCount[i];
      unitName = unitsGenre[i];
      console.log(`${ageCount} ${unitName}`);
    }
  } else {
    console.log("Age Out Of Range");
  }
}
// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

// Assignment 4
/* Arguements function challenge */

// Assignment 5
function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

// Assignment 6
let pram = 1;
function multiply(...numuric) {
  for (i = 0; i < numuric.length; i++) {
    if (typeof numuric[i] !== "number") continue;
    pram *= Math.trunc(numuric[i]);
  }
  console.log(pram);
  pram = 1;
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
