let button = document.getElementById("button");
let list = document.getElementById("list");

button.addEventListener("click", () => {
  prompt("შეიყვანეთ ინფორმაცია");
});

if (prompt == null) {
  alert("გთხოვთ ჩაწეროთ ინფორმაცია");
}

// if (info != null) {
//   function listAdd() {
//     let entry = document.createElement("li");
//     entry.appendChild(document.createTextNode(info));
//     list.appendChild(entry);
//   }
// }
