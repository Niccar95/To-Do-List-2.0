export function createHtml(newList: Element | null, taskList: string[]) {
  taskList.forEach((task) => {
    const listItem = document.createElement("li");
    const removeButton = document.createElement("button");
    listItem.classList.add("listItem");
    removeButton.classList.add("removeButton");

    listItem.innerHTML = task;

    newList?.appendChild(listItem);
    listItem.appendChild(removeButton);
  });
}
