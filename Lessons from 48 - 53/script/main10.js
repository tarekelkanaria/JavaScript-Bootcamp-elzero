// Lessons from 48 - 53 Tasks
// Practice add products to page
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors = ["Red", "Green", "Blue"];
let showCount = 5;

document.write(`<h1>Show ${showCount} Products</h1>`);
for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h2> [${i + 1}] ${products[i]}</h2>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`);
  }
  document.write(`<p>${colors.join(" | ")}</p>`);
  document.write(`</div>`);
}

// Assignment 1
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  if (i === exclude) {
    continue;
  }
  console.log(i);
} // Output: 10, 20, 30, 50, 60, 70, 80, 90, 100

// Assignment 2
let startOne = 10;
let endOne = 0;
let stopOne = 3;

for (let i = startOne; i >= stopOne; i--) {
  if (i < startOne) {
    console.log(`${endOne}${i}`);
  } else {
    console.log(i);
  }
}
// Output: 10, 09, 08, 07, 06, 05, 04, 03,

// Assignment 3
let startTwo = 1;
let endTwo = 6;
let breakerTwo = 2;

for (let i = startTwo; i <= endTwo; i++) {
  console.log(i);
  for (let j = breakerTwo; j < endTwo; j += j) {
    console.log(`-- ${j}`);
  }
}
// Output
/* 1, -- 2, -- 4; 2, -- 2, -- 4; 3, -- 2, -- 4; 4, -- 2, -- 4; 5, -- 2, -- 4; 6, -- 2, -- 4 */

// Assignment 4
let index = 10;
let jump = 2;
let endPoint = 0;

for (;;) {
  console.log(index);
  index -= jump;
  if (index === jump) break;
}
// Output: 10, 8, 6, 4

// Assignment 5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let count = letter.length;

for (let i = +""; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) continue;
  console.log(`${count++} => ${friends[i]}`);
}
// Output: 1 => Sayed, 2 => Eman, 3 => Mahmoud, 4 => Osama, 5 => Sameh

// Assignment 6
let startName = 0;
let swappedName = "elZerO";
let newName = "";

for (let i = startName; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    newName += swappedName[i].toUpperCase();
  } else {
    newName += swappedName[i].toLowerCase();
  }
}
console.log(newName);

// Output: ELzERo;

// Assignment 7
let startNum = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for (let i = ++startNum; i < mix.length; i++) {
  if (typeof mix[i] === "string") continue;
  console.log(mix[i]);
}
// Output: 2, 3, 4
