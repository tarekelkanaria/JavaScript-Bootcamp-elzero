// Lessons from 179 to 188 Tasks
// Assignment 1
const getArticles = (url) => {
  return new Promise((res, rej) => {
    let req = new XMLHttpRequest();
    req.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        res(JSON.parse(this.responseText));
      } else {
        rej(Error("Can't Find the Data"));
      }
    };

    req.open("GET", url);
    req.send();
  });
};

getArticles("script/articles.json")
  .then((items) => {
    items.length = 5;
    return items;
  })
  .then((result) =>
    result.forEach((article) => {
      let item = document.createElement("div");
      item.innerHTML = `
    <h3>${article.title}</h3>
    <p>${article.description}</p>
    `;
      let scrElem = document.querySelector("[src='script/main26.js']");
      scrElem.before(item);
    })
  )
  .catch((rej) => console.log(rej));

// Assignment 2
async function fetchData() {
  try {
    let data = await fetch("script/articles.json");
    let dataArr = await data.json();
    dataArr.length = 5;
    dataArr.forEach((unit) => {
      let part = document.createElement("div");
      part.innerHTML = `
    <h3>${unit.title}</h3>
    <p>${unit.description}</p>
    `;
      let scrElem = document.querySelector("[src='script/main26.js']");
      scrElem.before(part);
    });
  } catch (rej) {
    console.log(Error(rej));
  } finally {
    console.log("data finished");
  }
}
fetchData();
