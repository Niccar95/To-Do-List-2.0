import { createHtml } from "./createHtml";
import { Tasks } from "./models/Tasks";
import "../scss/style.scss";

const listForm = document.querySelector(".listForm");
const taskInput = document.querySelector(".taskInput") as HTMLInputElement;
const newList = document.querySelector("ul");

let taskList: Tasks[] = JSON.parse(localStorage.getItem("tasks") ?? "[]");

listForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskInputValue = taskInput?.value.trim();

  if (taskInputValue.trim() !== "") {
    const newTask = new Tasks(taskInputValue, false);
    taskList.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(taskList));

    console.log(taskList);

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

const clearAllButton = document.querySelector(".clearAllButton");

const sortTasks = document.querySelector(".sortTasks") as HTMLSelectElement;

sortTasks?.addEventListener("click", () => {
  let selectedValue = sortTasks.value;

  if (selectedValue === "Done") {
    taskList.sort((a, b) => (a.done === b.done ? 0 : a.done ? -1 : 1));
  } else if (selectedValue === "Pending") {
    taskList.sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1));
  }

  localStorage.setItem("tasks", JSON.stringify(taskList));

  if (newList) {
    newList.innerHTML = "";
  }

  createHtml(newList, taskList);
});

clearAllButton?.addEventListener("click", () => {
  if (newList) {
    newList.innerHTML = "";
    taskList = []; // Clear the taskList
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }
});

createHtml(newList, taskList);
