// Lessons from 111 to 114
// Assignment 1
let cont = document.querySelector(".container");
let formatForm = document.querySelector("form");
let fonts = document.querySelectorAll("[name=font] option");
let colors = document.querySelectorAll("[name=col] option");
let sizes = document.querySelectorAll("[name=siz] option");

if (
  window.localStorage.fontfamily &&
  window.localStorage.color &&
  window.localStorage.fontsize
) {
  fonts.forEach((ele) => {
    ele.removeAttribute("selected");
    if (ele.value === window.localStorage.fontfamily) {
      ele.setAttribute("selected", true);
    }
  });
  colors.forEach((ele) => {
    ele.removeAttribute("selected");
    if (ele.value === window.localStorage.color) {
      ele.setAttribute("selected", true);
    }
  });
  sizes.forEach((ele) => {
    ele.removeAttribute("selected");
    if (ele.value === window.localStorage.fontsize) {
      ele.setAttribute("selected", true);
    }
  });
  cont.style.fontFamily = `${window.localStorage.fontfamily}, sans-serif`;
  cont.style.color = window.localStorage.color;
  cont.style.fontSize = `${window.localStorage.fontsize}px`;
}

function changeFormat(e) {
  e.preventDefault();
  fonts.forEach((ele) => {
    ele.removeAttribute("selected");
    if (ele.value === e.target.font.value) {
      ele.setAttribute("selected", true);
    }
  });
  colors.forEach((ele) => {
    ele.removeAttribute("selected");
    if (ele.value === e.target.col.value) {
      ele.setAttribute("selected", true);
    }
  });
  sizes.forEach((ele) => {
    ele.removeAttribute("selected");
    if (ele.value === e.target.siz.value) {
      ele.setAttribute("selected", true);
    }
  });
  cont.style.fontFamily = `${formatForm.font.value}, sans-serif`;
  cont.style.color = formatForm.col.value;
  cont.style.fontSize = `${formatForm.siz.value}px`;
  window.localStorage.fontfamily = formatForm.font.value;
  window.localStorage.color = formatForm.col.value;
  window.localStorage.fontsize = formatForm.siz.value;
}
formatForm.addEventListener("submit", changeFormat);

// Assignment 2
let secondForm = document.querySelectorAll(".container form")[1];

if (window.sessionStorage.userName) {
  secondForm.user.value = window.sessionStorage.userName;
}
secondForm.user.addEventListener("change", (e) => {
  window.sessionStorage.setItem("userName", e.target.value);
});
if (window.sessionStorage.userMail) {
  secondForm.mail.value = window.sessionStorage.userMail;
}
secondForm.mail.addEventListener("change", (e) => {
  window.sessionStorage.setItem("userMail", e.target.value);
});
if (window.sessionStorage.userPhone) {
  secondForm.phone.value = window.sessionStorage.userPhone;
}
secondForm.phone.addEventListener("change", (e) => {
  window.sessionStorage.setItem("userPhone", e.target.value);
});
if (window.sessionStorage.selected) {
  secondForm.skills.value = window.sessionStorage.selected;
}
let optionsArray = Array.from(secondForm.skills.children);
secondForm.skills.addEventListener("click", selectOpt);
function selectOpt(event) {
  optionsArray.forEach((ele) => {
    ele.removeAttribute("selected");
    if (ele.value === secondForm.skills.value) {
      ele.setAttribute("selected", true);
    }
  });
  window.sessionStorage.setItem("selected", event.target.value);
}
