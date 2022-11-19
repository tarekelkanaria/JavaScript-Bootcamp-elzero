// practice local storage color app
let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  // If there is color in local storage
  // Add color to div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  // Remove active class form all lis
  lis.forEach((el) => {
    el.classList.remove("active");
  });
  // Add active class to element with same color in local storage
  document
    .querySelector(`[data-color = ${window.localStorage.getItem("color")}]`)
    .classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    // Remove active class from all lis
    lis.forEach((el) => {
      el.classList.remove("active");
    });
    // Add active class to current element
    e.currentTarget.classList.add("active");
    // Add current element to local storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // Add current element color to div
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
