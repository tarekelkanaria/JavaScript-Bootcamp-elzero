// Lessons from 94 - 101 Tasks
// DOM Challenge
document.body.style.cssText =
  "margin: 0; background-color: rgb(236, 236, 236); font-family: Tahoma, Arial;";
//   Start Header
let header = document.createElement("div");
header.className = "website-head";
header.style.cssText =
  "display: flex; padding: 20px; background-color: rgb(255, 255, 255); justify-content: space-between; align-items: center;";
let logo = document.createElement("a");
logo.title = "Website Logo";
logo.className = "logo";
logo.style.cssText =
  "display: block; font-weight: bold; color: rgb(35, 169, 110); font-size: 26px;";
let logoText = document.createTextNode("Elzero");
logo.append(logoText);
header.append(logo);
let menu = document.createElement("ul");
menu.className = "menu";
let firstList = document.createElement("li");
firstList.innerText = "Home";
firstList.style.cssText = "padding: 5px; color: #777";
let secondList = document.createElement("li");
secondList.innerText = "About";
secondList.style.cssText = "padding: 5px; color: #777";
let thirdList = document.createElement("li");
thirdList.innerText = "Service";
thirdList.style.cssText = "padding: 5px; color: #777";
let fourthList = document.createElement("li");
fourthList.innerText = "Contact";
fourthList.style.cssText = "padding: 5px; color: #777";
menu.append(firstList, secondList, thirdList, fourthList);
menu.style.cssText = "padding: 0; margin: 0; list-style: none; display: flex;";
header.append(menu);
// End Header
// Start Content
let content = document.createElement("div");
content.className = "content";
content.style.cssText =
  "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 142px); box-sizing: border-box;";
for (let i = 0; i < 15; i++) {
  let product = document.createElement("div");
  product.className = "product";
  product.style.cssText =
    "padding: 20px; background-color: white; border: 1px solid #ddd; width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: #888; border-radius: 6px;";
  let count = document.createElement("span");
  count.style.cssText =
    "font-size: 40px; color: black; font-wight: normal; display: block; margin-bottom: 10px; margin-top: 10px;";
  count.innerText = i + 1;
  product.append(count);
  count.after("Product");
  content.append(product);
}
// End Content
// Start Footer
let footer = document.createElement("div");
footer.className = "footer";
footer.style.cssText =
  "background-color: #23a96e; font-size: 26px; text-align: center; padding: 20px; color: white;";
footer.innerText = "Copyright 2021";
// End Footer
document.body.prepend(header, content, footer);
