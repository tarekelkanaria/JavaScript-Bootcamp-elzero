// Lessons from 38 - 39 Tasks
// Switch and if condition challenge

let job = "lawyer";
let salary = 0;

/* if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
} */

switch (job) {
  case "Manager":
    salary = 8000;
    console.log(`${job} and salary: ${salary}`);
    break;
  case "IT":
  case "Support":
    salary = 6000;
    console.log(`${job} and salary: ${salary}`);
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    console.log(`${job} and salary: ${salary}`);
    break;
  default:
    salary = 4000;
    console.log(`${job} and salary: ${salary}`);
}

let holidays = 0;
let money = 0;

/* switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
} */

if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}

// Assignment 1
let day = "        monday      ";
// console.log(`${day.trim()[0].toUpperCase()}${day.trim().slice(1)}`);
switch (`${day.trim()[0].toUpperCase()}${day.trim().slice(1)}`) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
}
