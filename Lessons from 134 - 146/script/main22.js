// Lessons from 134 to 146 Tasks
// Regular Expression Challenge

let url1 = "elzero.org";
let url2 = "http://elzero.info";
let url3 = "https://elzero.net";
let url4 = "https://www.elzero.com";
let url5 = "https://www.elzero.io:8080/articles.php?id=100&cat=topics";

let re =
  /(\bh\w{3}s?\W{3}((w){3}\.)?)?\w+\.\w{2,10}(\:\d+\W\w+\.\w{2,10}\?\w+\W\d+\W\w+\W\w+)?/gi;

console.log(url1.match(re)); // "elzero.org"
console.log(url2.match(re)); // "http://elzero.info"
console.log(url3.match(re)); // "https://elzero.net"
console.log(url4.match(re)); // "https://www.elzero.com"
console.log(url5.match(re)); // "https://www.elzero.io:8080/articles.php?id=100&cat=topics"

// Assignment 1
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let reg1 = /\b((\w{1,4})\:?){8}/gi;
console.log(ip.match(reg1));

// Assignment 2
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let regChar2 = /(\bos)\w*o\b/gi;
console.log(specialNames.match(regChar2)); // ['Os10O', 'OsO', 'Os100O', 'Osa100O']
let regNum2 = /(\bos)\d*o\b/gi;
console.log(specialNames.match(regNum2)); // ['Os10O', 'OsO', 'Os100O']

// Assignment 3
let phone = "+(995)-123 (4567)";
let reg3 = /(^\+\(\d{2,}\)\-)?\d+\s\(\d{4,}\)/gi;
console.log(phone.match(reg3));

// Assignment 4
let reg4 = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
let example = "https://---.elzero.org.articles/.php";
console.log(example.match(reg4));

// Explain
/*
https?:\/\/  =>  ---start with hyper text transfer protocool with optional security layer 
(followed by ? which means 0 or one) then escap speacial characters // by back slash \/\/
(?:[-\w]+\.)?  =>  ---Non-capture group, optional by ? 0 or one in the end, contain range in square 
brackets match the hyphen or word character one or more then scape the . special character
([-\w]+) => ---capturing group contain range matches hyphen or word character followed by + 
means one or more time and it can be found in the result array.
\.\w+(?:\.\w+)? => ----scap . followed by word character one or more time then Non-capturing group contain
scaping . special character and word character one or more time and end with ? means 0 or one time
\/?.* => scaping / special character which is optional 0 or one time then any character 0 or more time
*/

// Assignment 5
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let reg5 = /^((\d{1,2})(\/?|\s(\-\s)?)){2}\d{2,4}/g;

console.log(date1.match(reg5)); // "25/10/1982"
console.log(date2.match(reg5)); // "25 - 10 - 1982"
console.log(date3.match(reg5)); // "25 10 1982"
console.log(date4.match(reg5)); // "25 10 82"
