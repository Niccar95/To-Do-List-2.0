import './style.scss'

const listSection = document.getElementById("listSection");
const listForm = document.querySelector(".listForm");
const taskInput = document.querySelector(".taskInput") as HTMLInputElement;
const submitButton = document.getElementById("submitButton");
const taskSection = document.getElementById("taskSection");

const taskList: string[] = [];


listForm?.addEventListener("submit", (e) => {
e.preventDefault();

  const taskInputValue = taskInput?.value;

  if (taskInputValue) { 
    taskList.push(taskInputValue);
    console.log(taskList);
  }

    const newList = document.querySelector("ul");
    const listItem = document.createElement("li");

    newList?.appendChild(listItem);
    
    listItem.innerHTML = taskInputValue;

    taskInput.value = "";

});
