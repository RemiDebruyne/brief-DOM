function addItem() {
  let component = document.createElement("div");
  let item = document.getElementById("todo-item").value;
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("onclick", "deleteItem()");
  deleteButton.innerHTML = "Supprimer";
  component.append(item);
  component.append(deleteButton);
  let ul = document.querySelector("ul");
  ul.append(component);
  // ul.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
}

function deleteItem() {}
