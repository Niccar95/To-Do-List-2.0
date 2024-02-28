import { Tasks } from "./models/tasks";

export function createHtml(newList: Element | null, taskList: Tasks[]) {
  taskList.forEach((task, i) => {
    const listItem = document.createElement("li");
    const removeButton = document.createElement("button");
    listItem.classList.add("listItem");
    removeButton.classList.add("removeButton");
    removeButton.innerHTML = "X";

    const checkButton = document.createElement("button");
    checkButton.classList.add("checkButton");
    checkButton.innerHTML = "&#9745;";

    const buttonContainer = document.createElement("section");
    buttonContainer.classList.add("buttonContainer");

    listItem.innerHTML = task.task;

    newList?.appendChild(listItem);
    listItem.appendChild(buttonContainer);
    buttonContainer.appendChild(removeButton);
    buttonContainer.appendChild(checkButton);

    removeButton.addEventListener("click", () => {
      listItem.remove();

      taskList.splice(i, 1);
      console.log(taskList);

      localStorage.setItem("tasks", JSON.stringify(taskList));
    });

    if (task.done === true) {
      //checkButton.remove();
      listItem.childNodes[0].nodeValue = "Done!";
      console.log(task);
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
