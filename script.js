let button1 = document.getElementById("button1");
let list = document.getElementById("list");

button1.addEventListener("click", () => {
  let info = prompt("შეიყვანეთ ინფორმაცია");
  if (info) {
    let li = document.createElement("li");
    li.innerText = info;
    list.appendChild(li);

    let removeButton = document.createElement("button");
    removeButton.innerText = "წაშლა";
    removeButton.addEventListener("click", () => {
      li.remove();
    });
    li.appendChild(removeButton);
  }
});
