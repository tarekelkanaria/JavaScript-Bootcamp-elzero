// Lessons from 86 - 93 Tasks
// Assignment 1
let methodOne = document.getElementById("elzero");
console.log(methodOne);
let methodTwo = document.getElementsByTagName("div")[0];
console.log(methodTwo);
let methodThree = document.getElementsByClassName("element")[0];
console.log(methodThree);
let methodFour = document.getElementsByName("js")[0];
console.log(methodFour);
let methodFive = document.querySelector("#elzero");
console.log(methodFive);
let methodSix = document.querySelector(".element");
console.log(methodSix);
let methodSeven = document.querySelector("div");
console.log(methodSeven);
let methodEight = document.querySelector("[name = 'js']");
console.log(methodEight);
let methodNine = document.querySelectorAll("#elzero")[0];
console.log(methodNine);
let methodTen = document.querySelectorAll(".element")[0];
console.log(methodTen);
let methodEleven = document.querySelectorAll("div")[0];
console.log(methodEleven);
let methodTwelve = document.querySelectorAll('[name = "js"]')[0];
console.log(methodTwelve);
let methodTherteen = document.body.firstElementChild;
console.log(methodTherteen);
let methodFourteen = document.body.children[0];
console.log(methodFourteen);
let methodFifteen = document.body.childNodes[3];
console.log(methodFifteen);

// Assignment 2
let allImages = document.querySelectorAll("div img");
for (let i = 0; i < allImages.length; i++) {
  allImages[i].setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
  allImages[i].setAttribute("alt", "Elzero Logo");
  allImages[i].style.cssText = "max-width: 100%;";
}

// Assignment 3
let userInput = document.querySelector("[name = 'dollar']");
let result = document.querySelector(".result");
userInput.oninput = (e) => {
  if (userInput.value >= 0) {
    result.innerText = `{${userInput.value}} USD Dollar = {${(
      userInput.value * 15.6
    ).toFixed(2)}} Egyptian Pound`;
  }
};

// Assignment 4
let firstDiv = document.querySelector(".one");
let secondDiv = document.querySelector(".two");
firstDiv.title = firstDiv.className;
secondDiv.title = secondDiv.className;
let secondText = `${firstDiv.innerText} ${secondDiv.attributes.length}`;
firstDiv.innerText = secondDiv.innerText;
secondDiv.innerText = secondText;

// Assignment 5
let images = document.querySelectorAll("body > img");
for (let i = 0; i < 5; i++) {
  if (images[i].hasAttribute("alt")) {
    images[i].alt = "Old";
  } else {
    images[i].alt = "Elzero New";
  }
}

// Assignment 6
let insideResult = document.querySelector(".results");
let elementsNumber = document.querySelector("[name = 'elements']");
let elementsText = document.querySelector("[name = 'texts']");
let elementsType = document.querySelector("[name = 'type']");
insideResult.style =
  "display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:20px; padding: 10px;";
let createButton = document.querySelector("[name = 'create']");
createButton.style =
  "background-color: #009489; color: white; font-weight: bold; padding: 10px; width: 250px; height: 2.5rem; border: none; margin: 20px auto; display: block; cursor: pointer;";
document.querySelector("[name = 'create']").onclick = (e) => {
  if (insideResult.innerHTML !== "") {
    insideResult.innerHTML = "";
  }
  e.preventDefault();
  for (let i = 1; i <= elementsNumber.value; i++) {
    let innerElement = document.createElement(elementsType.value);
    innerElement.className = "box";
    innerElement.setAttribute("title", "Element");
    innerElement.setAttribute("id", `id-${i}`);
    innerElement.innerText = elementsText.value;
    innerElement.style =
      "background-color: #fc5528; padding: 10px 20px; color: white; display: flex; justify-content: center; align-items: center; font-size: 1.2rem; font-weight: bold;";
    insideResult.appendChild(innerElement);
  }
};
