// Lessons from 33 - 37 Tasks

// if condition challenge
let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}
// Write with ternary if syntax
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

let st = "Elzero Web School";
if (st.length + st.length === 34) {
  console.log("Good");
} // Good
if (
  st.charAt(st.indexOf("W")).toLowerCase() ||
  st.charAt(st.indexOf("w")) === "w"
) {
  console.log("Good");
} // Good
if (typeof +st !== "string") {
  console.log("Good");
} // Good
if (typeof +st === "number") {
  console.log("Good");
} // Good
if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
} // Good

// Assignment 1
// Test Case 1
let num = 9; // "009"
/*
// Test Case 2
let num = 20; // "020"
// Test Case 3
let num = 110; // "110"
*/
if (num < 10) {
  console.log(`00${num}`);
} else if (num > 10 && num < 100) {
  console.log(`0${num}`);
} else if (num >= 100) {
  console.log(num);
}

// Assignment 2
let numb1 = 7;
let str = "7";
let str2 = "10";
// Output
if (numb1 == str) {
  console.log("{num1} Is The Same Value As {str}");
  if (typeof numb1 != typeof str) {
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
    if (numb1 != str2) {
      if (typeof numb1 != typeof str2) {
        console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
        if (str != str2) {
          if (typeof str === typeof str2) {
            console.log(
              "{str} Is The Same Type As {str2} But Not The Same Value"
            );
          }
        }
      }
    }
  }
}
// Another Way
/*
if (num1 == str) {
  console.log("{num1} Is The Same Value As {str}");
}
if (num1 == str) {
  if (typeof num1 != typeof str) {
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
  }
}
if (num1 != str2) {
  if (typeof num1 != typeof str2) {
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
  }
}
if (str != str2) {
  if (typeof str === typeof str2) {
    console.log("{str} Is The Same Type As {str2} But Not The Same Value");
  }
} */

// Assignment 3
let numb2 = "20";
let numb3 = "25";
let numb4 = 25;

if (
  numb4 > numb2 &&
  typeof numb4 != typeof numb3 &&
  numb4 == numb3 &&
  numb4 != numb2
) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number"
  );
  console.log(
    "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
  );
  console.log(
    "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  );
}

// Assignment 4
// Edit What You Want Here
let num1 = 10;
let num2 = 9;
let num3 = 10;
let num4 = 32;
/* Do Not Edit Below This Line Needed Output True 7 Times */
// Condition 1
if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 2
if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 3
if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 4
if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 5
if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 6
if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 7
if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
