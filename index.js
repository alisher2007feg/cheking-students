const students = [
  { id: 1, name: "Alice", grade: "A" },
  { id: 2, name: "Bob", grade: "C" },
  { id: 3, name: "Charlie", grade: "B" },
  { id: 4, name: "Dave", grade: "A" },
  { id: 5, name: "Eve", grade: "B" },
];

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = Number(input.value);
  const selectedId = students.find((element) => element.id === id);
  if (selectedId) {
    result.innerHTML = `ID: ${selectedId.id} <br> Name: ${selectedId.name} <br> Grade: ${selectedId.grade}`;
  } else if (id === 0) {
    result.innerHTML = "";
  } else {
    result.innerHTML = "this id does not exist";
  }
});