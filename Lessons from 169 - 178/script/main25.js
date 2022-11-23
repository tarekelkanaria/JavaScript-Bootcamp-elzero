// Lessons from 147 to 158 Tasks
// Assignment 2
(function request() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "script/articles.json");
  xhr.setRequestHeader("Content-Type", "application / json");
  xhr.setRequestHeader("Cache-Control", "no-cache");
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      console.log(xhr.responseText);
      // Assignment 3
      const mainData = JSON.parse(xhr.responseText);
      for (article of mainData) {
        article.category = "All";
      }
      console.log(mainData);
      const updatedData = JSON.stringify(mainData);
      console.log(updatedData);
      // Assignment 4
      let container = document.createElement("div");
      container.setAttribute("id", "data");
      for (item of JSON.parse(updatedData)) {
        let itemElement = document.createElement("div");
        itemElement.innerHTML = `<h2>${item.title}</h2>
           <p>${item.content}</p>
           <p>${item.author}</p>
           <p>${item.category}</p>`;
        container.append(itemElement);
      }
      let scriptFile = document.querySelector("[src='script/main25.js']");
      scriptFile.before(container);
    }
  };
  xhr.onloadend = () => {
    console.log("Data Loaded");
  };
})();
