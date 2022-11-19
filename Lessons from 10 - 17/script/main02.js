// Lessons from 10 - 17 Tasks

// Challenge 1
let articleTitle = "Elzero",
  describeArticle = "Elzero Web School",
  dateOfArticle = "25/10";
let articleContent = `<div class='card'>
<h3>Hello ${articleTitle}</h3>
<p>${describeArticle}</p>
<span>${dateOfArticle}</span>
</div>`;
document.write(articleContent.repeat(4));

// assignment 1
let numberOne = 10,
  numberTwo = 20;
console.log(numberOne + "" + numberTwo);
console.log(typeof (numberOne + " " + numberTwo));
console.log(`${numberOne}${numberTwo}`);
console.log(typeof `${numberOne}${numberTwo}`);
console.log(numberTwo + "\n" + numberOne);
console.log(`${numberTwo} 
${numberOne}`);

// assignment 2
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// assignment 3
console.log(
  'I\'m In\n\\\\\nLove \\\\ """ \'\'\'\n++ With ++\n\\"""\\"""\n""JavaScript""``'
);

// assignment 4
let a = 21;
let b = 20;
let d = `${b}${a}_`;
console.log(`_${a}_${d.repeat(3)}${b}_`);
// another ways
let c = b.toString() + a.toString() + "_";
console.log("_" + a + "_" + c.repeat(3) + b + "_");
console.log(`_${a}_${c.repeat(3)}${b}_`);
