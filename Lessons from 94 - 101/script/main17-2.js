// Assignment 2
let addClass = document.querySelector(".classes-to-add");
let removeClass = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector("[title='Current']");
let resultParent = document.querySelector(".assign h5").nextElementSibling;
addClass.addEventListener("blur", function () {
  if (addClass.value.length > 0) {
    let classesList = addClass.value.trim().toLowerCase().split(" ");
    for (let i = 0; i < classesList.length; i++) {
      currentElement.classList.add(classesList[i]);
    }
    addClass.value = "";
  }
});
removeClass.addEventListener("blur", function () {
  if (removeClass.value.length > 0) {
    let classesList = removeClass.value.trim().toLowerCase().split(" ");
    for (let i = 0; i < classesList.length; i++) {
      currentElement.classList.remove(classesList[i]);
    }
  }
  removeClass.value = "";
});
for (let i = 0; i < currentElement.classList.length; i++) {
  let result = document.createElement("span");
  let orderCurrent = currentElement.classList.value.split(" ").sort();
  result.innerHTML = orderCurrent[i];
  resultParent.append(result);
}
function displayClasses() {
  resultParent.innerHTML = "";
  if (currentElement.classList.length === 0) {
    resultParent.innerHTML = "No Classes to show";
  } else {
    currentElement.classList.value
      .split(" ")
      .sort()
      .forEach((element) => {
        let result = document.createElement("span");
        result.innerHTML = element;
        resultParent.append(result);
      });
  }
}
addClass.addEventListener("blur", displayClasses);
removeClass.addEventListener("blur", displayClasses);

// Assignment 3
document.querySelector(".assign3 p").remove();
let start = document.querySelector(".our-element").cloneNode(false);
start.className = "start";
start.title = "Start Element";
start.setAttribute("data-value", "start");
start.innerText = "Start";
let end = document.querySelector(".our-element").cloneNode(false);
end.className = "end";
end.setAttribute("title", "End Element");
end.setAttribute("data-value", "end");
end.innerText = "End";
document.querySelector(".our-element").before(start);
document.querySelector(".our-element").after(end);

// Assignment 4
let ourElement = document.querySelector(".assign4 div").lastChild;
let ourText = ourElement.textContent.trim();
console.log(ourText);

// Assignment5
let ourPage = document.querySelector(".assign5").children;
for (let i = 0; i < ourPage.length; i++) {
  ourPage[i].onclick = () => console.log(`This Is ${ourPage[i].tagName}`);
}
