export function createHtml(newList: Element | null, taskList: string[]) {
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

    listItem.innerHTML = task;

    newList?.appendChild(listItem);
    listItem.appendChild(buttonContainer);
    buttonContainer.appendChild(removeButton);
    buttonContainer.appendChild(checkButton);

    removeButton.addEventListener("click", () => {
      listItem.remove();

      taskList.splice(i, 1);

      localStorage.setItem("tasks", JSON.stringify(taskList));
    });

    checkButton.addEventListener("click", () => {
      const index = taskList.indexOf(task);
      if (index !== -1) {
        taskList[index] = "Done!";
      }

      listItem.childNodes[0].nodeValue = "Done!";

      checkButton.disabled = true;

      localStorage.setItem("tasks", JSON.stringify(taskList));
    });
  });
}
