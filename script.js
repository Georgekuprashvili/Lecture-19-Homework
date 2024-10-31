let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let list = document.getElementById("list");

button1.addEventListener("click", () => {
  let info = prompt("შეიყვანეთ ინფორმაცია");
  let li = document.createElement("li");
  li.innerText = info;
  list.appendChild(li);
});
button2.addEventListener("click", () => {
  if (list.firstChild) {
    list.removeChild(list.firstChild);
  }
});
