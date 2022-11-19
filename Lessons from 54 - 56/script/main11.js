// Lessons from 54 - 56 Tasks
// Loop Challenge
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployess = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Osman",
  "Amany",
  "Samia",
  "Anwar",
];
let adminsNumber = 0;
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i].includes("Stop")) break;
  adminsNumber += 1;
}
document.write(`<div>We Have ${adminsNumber} Admins</div>`);
document.write(`<hr>`);
let teamNumber = 1;
for (let i = 0; i < adminsNumber; i++) {
  document.write(`<div>`);
  document.write(`The Admin for Team ${teamNumber} Is ${myAdmins[i]}`);
  teamNumber += 1;
  document.write(`<h3>Team Members: </h3>`);
  let employeeCount = 1;
  for (let j = 0; j < myEmployess.length; j++) {
    if (myEmployess[j][0] === myAdmins[i][0]) {
      document.write(`<p>- ${employeeCount} ${myEmployess[j]}</p>`);
      employeeCount += 1;
    }
  }
  document.write(`</div>`);
  document.write(`<hr>`);
}

// Assignment 1
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
  if (friends[index][+""] === "A" || typeof friends[index] === "number") {
    index++;
    continue;
  } else {
    console.log(`${++counter} => ${friends[index]}`);
    index++;
  }
}
// Output: 1 => Sayed, 2 => Mahmoud
