// Lessons from 115 to 122 Tasks
// Destructuring Challenge
let chosen = 2;
let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Djano"] },
  { title: "Sayed", age: 35, available: true, skills: ["PHP", "Laravel"] },
];
// simple solution
// let {
//   title,
//   age,
//   available,
//   skills: [, lastSkill],
// } = myFriends[chosen - 1];
// console.log(title);
// console.log(age);
// console.log(available ? "Available" : "Not Available");
// console.log(lastSkill);

// if condition solution
if (chosen === 1) {
  const [first] = myFriends;
  const {
    title,
    age,
    available,
    skills: [, lastSkill],
  } = first;
  console.log(title);
  console.log(age);
  console.log(available ? "Available" : "Not Available");
  console.log(lastSkill);
} else if (chosen === 2) {
  const [, second] = myFriends;
  const {
    title,
    age,
    available,
    skills: [, lastSkill],
  } = second;
  console.log(title);
  console.log(age);
  console.log(available ? "Available" : "Not Available");
  console.log(lastSkill);
} else if (chosen === 3) {
  let [, , third] = myFriends;
  let {
    title,
    age,
    available,
    skills: [, lastSkill],
  } = third;
  console.log(title);
  console.log(age);
  console.log(available ? "Available" : "Not Available");
  console.log(lastSkill);
}

// Assignment 1
let myNumbers = [1, 2, 3, 4, 5];
const [a, , , , e] = myNumbers;
console.log(a * e); // 5

// Assignment 2
let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];
const [a2, b, c, [d, e2, [f, g]]] = mySkills;
console.log(`My Skills: ${a2}, ${b}, ${c}, ${d}, ${e2}, ${f}, ${g}`);
// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// Assignment 3
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];
const totalArr = [...arr3, ...arr1];
const [, a3, b3, c3] = totalArr;
console.log(`My Best Friends: ${a3}, ${b3}, ${c3}`);
// My Best Friends: Shady, Mahmoud, Ahmed

// Assignment 4
const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};
const {
  age: a4,
  working: w4,
  country: c4,
  hobbies: [h1, , h3],
} = member;
console.log(`My Age Is ${a4} And Iam ${w4 ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working
console.log(`I Live in ${c4}`); // I Live in Egypt
console.log(`My Hobbies: ${h1} And ${h3}`); // My Hobbies: Reading And Programming

// Assignment 5
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};
const o5 = Object.keys(game.releases)[0];
const a5 = Object.keys(game.releases)[1];
const {
  title: t5,
  developer: d5,
  releases: {
    [o5]: [u, j],
    [a5]: { US: u_price, JAP: j_price },
    Origin: or,
  },
} = game;
console.log(`My Favourite Games Style Is ${t5} Style`);
// My Favourite Games Style Is YS Style
console.log(`And I Love ${d5} Games`); // And I Love Falcom Games
console.log(`My Best Release Is ${o5} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan
console.log(`Although I Love ${a5}`); // Although I Love Ark Of Napishtim
console.log(`${a5} Price in USA Is ${u_price}`); // Ark Of Napishtim Price in USA Is 20 USD
console.log(`${a5} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD
console.log(`Origin Price Is ${or}`); // Origin Price Is 30 USD
