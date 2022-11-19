// Lessons from 111 to 114 Tasks
// Bom Challenge
// Declare main variables
let cont = document.querySelector(".container");
let formTask = document.querySelector(".form");
let taskInput = document.querySelector(".input");
let addBtn = document.querySelector(".add");
let tasksCont = document.querySelector(".tasks");
cont.style.cssText = "margin: 20px auto; width: 300px;";
formTask.style.cssText =
  "background-color: #e5e2e2; padding: 24px; display: flex; justify-content: space-between;";
taskInput.style.cssText =
  "border: none; outline: none; height: 2em; border-radius: 6px; padding: 2px 4px;";
addBtn.style.cssText =
  "background-color: #ff5722; color: white; font-weight: bold; border: none; cursor: pointer; padding: 5px 8px; border-radius: 6px;";
tasksCont.style.cssText =
  "background-color: #e5e2e2; padding: 20px; width: 260px; margin: 20px auto;";
let tasksList = [];

// Check if local storage have data and append it to tasks container
if (window.localStorage.getItem("tasks")) {
  tasksList = tasksList.concat(JSON.parse(window.localStorage.tasks));
  tasksList.forEach((ele) => {
    let taskData = document.createElement("div");
    let delBtn = document.createElement("button");
    taskData.style.cssText =
      "background-color: white; display: flex; justify-content: space-between; margin: 10px; padding: 10px; border-radius: 6px;";
    delBtn.style.cssText =
      "background-color: #ff5722; color: white; font-weight: bold; border:none; cursor: pointer; padding: 5px 8px; border-radius: 6px;";
    delBtn.innerText = "Delete";
    taskData.innerText = ele.title;
    taskData.append(delBtn);
    tasksCont.append(taskData);
    delBtn.addEventListener("click", (e) => {
      tasksList = tasksList.filter((ele) => {
        let removedItem = e.target.parentElement.textContent;
        return (
          ele.title !== removedItem.slice(0, removedItem.indexOf("Delete"))
        );
      });
      delBtn.parentElement.remove();
      window.localStorage.setItem("tasks", JSON.stringify(tasksList));
    });
  });
}
//   Take the data from user and create div to receive
addBtn.addEventListener("click", createTasks);
function createTasks() {
  if (taskInput.value) {
    let taskData = document.createElement("div");
    let delBtn = document.createElement("button");
    taskData.style.cssText =
      "background-color: white; display: flex; justify-content: space-between; margin: 10px; padding: 10px; border-radius: 6px;";
    delBtn.style.cssText =
      "background-color: #ff5722; color: white; font-weight: bold; border:none; cursor: pointer; padding: 5px 8px; border-radius: 6px;";
    delBtn.innerText = "Delete";
    taskData.innerText = taskInput.value;
    let taskItem = { id: 1633596162116, title: taskData.innerText };
    taskData.append(delBtn);
    tasksCont.append(taskData);
    tasksList.push(taskItem);
    window.localStorage.setItem("tasks", JSON.stringify(tasksList));
    delBtn.addEventListener("click", (e) => {
      tasksList = tasksList.filter((ele) => {
        let removedItem = e.target.parentElement.textContent;
        return (
          ele.title !== removedItem.slice(0, removedItem.indexOf("Delete"))
        );
      });
      delBtn.parentElement.remove();
      window.localStorage.setItem("tasks", JSON.stringify(tasksList));
    });
  }
}
