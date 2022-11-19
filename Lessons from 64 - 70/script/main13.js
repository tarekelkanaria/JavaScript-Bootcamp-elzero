// Lessons from 64 - 70 Tasks

// Arrow Function Challenge
// let names = function (...peopleNames) {
//   return ` String \[${peopleNames.join("], [")}\] => Done !`;
// };
let names = (...peopleNames) =>
  `String [${peopleNames.join("], [")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim")); // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => one + two + +nums;
// Anonymous function
// let calc = function (one, two, ...nums) {
//   return one + two + +nums;
// };
// Regular function
function calc(one, two, ...nums) {
  return one + two + +nums;
}
console.log(calc(10, myNumbers[+""], myNumbers[+true])); // 80

// Assignment 1
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    return `${zName.slice(0, zName.indexOf(" "))} ${zName
      .slice(zName.indexOf(" ") + 1, zName.indexOf(" ") + 2)
      .toUpperCase()}.`;
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    return `Your Age Is ${parseInt(zAge)}`;
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(
      zAge
    )}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// Assignment 2
let itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// Assignment 3
let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// Assignment 4
function specialMix(...data) {
  let pram = 0;
  for (let i = 0; i < data.length; i++) {
    if (isNaN(parseInt(data[i])) === false) {
      pram += parseInt(data[i]);
    }
  }
  if (pram === 0) {
    return "All Are Strings";
  } else {
    return pram;
  }
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
