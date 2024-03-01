import { Tasks } from "./models/Tasks";

export function createHtml(newList: Element | null, taskList: Tasks[]) {
  taskList.forEach((task) => {
    const listItem = document.createElement("li");
    const removeButton = document.createElement("button");
    listItem.classList.add("listItem");
    removeButton.classList.add("removeButton");
    removeButton.innerHTML = "x";

    const checkButton = document.createElement("button");
    checkButton.classList.add("checkButton");
    checkButton.innerHTML = "&#9745;";

    const buttonContainer = document.createElement("section");
    buttonContainer.classList.add("buttonContainer");

    listItem.innerHTML = task.task;

    newList?.appendChild(listItem);
    listItem.appendChild(buttonContainer);

    buttonContainer.appendChild(checkButton);
    buttonContainer.appendChild(removeButton);
    removeButton.addEventListener("click", () => {
      listItem.remove();

      const index = taskList.indexOf(task);

      if (index !== -1) taskList.splice(index, 1);
      console.log(taskList);

      localStorage.setItem("tasks", JSON.stringify(taskList));
    });

    if (task.done === true) {
      listItem.childNodes[0].nodeValue = "Done!";
      checkButton.innerHTML = "&#9745;";
      console.log(task);
    } else {
      checkButton.innerHTML = "&#x2610";
    }

    checkButton.addEventListener("click", () => {
      const index = taskList.indexOf(task);
      console.log(index);

      if (index !== -1) {
        if (taskList[index].done) {
          listItem.childNodes[0].nodeValue = task.task;
          taskList[index].done = false;
          checkButton.innerHTML = "&#x2610";
        } else {
          listItem.childNodes[0].nodeValue = "Done!"; // Display
          taskList[index].done = true;
          checkButton.innerHTML = "&#9745;";
        }
      }

      localStorage.setItem("tasks", JSON.stringify(taskList));
    });
  });
}
