// Lessons from 1 - 9 Tasks

// First assignment
/* code one wouldn't work because the element with id "el"
hasn't loaded yet */

// Second assignment
var firstElement = document.createElement("h1");
firstElement.innerHTML = "Elzero";
/* firstElement.style =
  "color: blue; font-size:80px; font-weight: bold; text-align: center; font-family: Arial;"; 
*/
// Another Way
firstElement.style.color = "blue";
firstElement.style.fontSize = "80px";
firstElement.style.fontWeight = "bold";
firstElement.style.textAlign = "center";
firstElement.style.fontFamily = "Arial";
document.body.appendChild(firstElement);

// Third assignment
console.log(
  "%cElzero %cWeb %cSchool",
  "color: red; font-size: 40px;",
  "color: green; font-size: 40px; font-weight: bold;",
  "color: white; background-color: blue; font-size: 40px;"
);

// Fourth assignment
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();

// Fifth assignment
console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);

// Six assignment
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/
// console.log("Iam In Console");
// document.write("Iam In Page");
