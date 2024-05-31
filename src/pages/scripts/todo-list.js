function addItem() {
  // Creates a div "component" composed of an li element and a button
  let component = document.createElement("li");

  let item = document.getElementById("todo-item").value;

  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("onclick", "deleteItem()");
  deleteButton.innerHTML = "Supprimer";

  component.append(item);
  component.append(deleteButton);

  // Append my "component" to the ul
  document.querySelector("ul").append(component);

  // ul.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
}

function deleteItem() {}
