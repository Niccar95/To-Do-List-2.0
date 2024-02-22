export function createHtml(newList: Element | null, taskList: string[]) {
  taskList.forEach((task) => {
    const listItem = document.createElement("li");
    const removeButton = document.createElement("button");
    listItem.classList.add("listItem");
    removeButton.classList.add("removeButton");
    removeButton.innerHTML = "X";

    const checkButton = document.createElement("button");
    checkButton.classList.add("checkButton");
    checkButton.innerHTML = "check";

    const buttonContainer = document.createElement("section");
    buttonContainer.classList.add("buttonContainer");

    listItem.innerHTML = task;

    newList?.appendChild(listItem);
    listItem.appendChild(buttonContainer);
    buttonContainer.appendChild(removeButton);
    buttonContainer.appendChild(checkButton);
  });
}
