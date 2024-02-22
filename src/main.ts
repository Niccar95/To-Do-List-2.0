import { createHtml } from "./createHtml";
import "./style.scss";

//const listSection = document.getElementById("listSection");
const listForm = document.querySelector(".listForm");
const taskInput = document.querySelector(".taskInput") as HTMLInputElement;
//const submitButton = document.getElementById("submitButton");
//const taskSection = document.getElementById("taskSection");
const newList = document.querySelector("ul");

let taskList: string[] = JSON.parse(localStorage.getItem("tasks") ?? "[]");

listForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskInputValue = taskInput?.value.trim();

  if (taskInputValue.trim() !== "") {
    taskList.push(taskInputValue);
    console.log(taskList);
    localStorage.setItem("tasks", JSON.stringify(taskList));

    if (newList) {
      newList.innerHTML = "";
    }

    createHtml(newList, taskList);
    taskInput.value = "";
  } else {
    alert("No task added!");
  }
});

taskList = JSON.parse(localStorage.getItem("tasks") ?? "[]");

createHtml(newList, taskList);
