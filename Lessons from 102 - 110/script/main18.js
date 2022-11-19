// Lessons from 102 to 110
// Assignment 1
let userInput = prompt("Print Number From – To", "Example: 5-20");
let reg = /\d+/g;
if (userInput) {
  let rangNumber = userInput.match(reg).sort((a, b) => a - b);
  for (let i = parseInt(rangNumber[0]); i <= parseInt(rangNumber[1]); i++) {
    console.log(i);
  }
}

// Assignment 2
function popUp() {
  Swal.fire({
    title: "Welcome",
    text: "Welcome To Elzero Web School",
    background: "#dbdbdb",
    showConfirmButton: "false",
    showCloseButton: true,
  });
  Swal.getCloseButton().style.cssText =
    "background-color: red; border-radius: 50%;";
}
setTimeout(popUp, 5000);

// Assignment 3 & 4 & 5
let page = document.querySelector(".counter");
let div = document.createElement("div");
page.append(div);
div.innerText = 10;
let control = setInterval(() => {
  div.innerText = parseInt(div.innerText) - 1;
  if (div.innerText == 5) {
    window.open(
      "https://elzero.org",
      "_blank",
      "width=400,height=300,top=20,left=300"
    );
  }
  if (div.innerText == 0) {
    clearInterval(control);
    window.location.assign("https://elzero.org");
  }
}, 1000);
