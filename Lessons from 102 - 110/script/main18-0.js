// Practice to top button
let btn = document.querySelector(".top");
btn.style.cssText =
  "width: 20px; height: 20px; justify-content: center; align-items: center; padding: 20px; position: fixed; bottom: 20px; right: 20px; cursor: pointer; display: none;";
window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
