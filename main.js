const toArray = document.querySelector("#to-array");
const displayArray = document.querySelector("#display-array");
const clear = document.querySelector("#clear-array");
const input = document.querySelector("#input");
const listHeader = document.querySelector("#list-header");
const theList = [];

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");

// for (let number = 0; number < 5; number++) {
//   console.log(number);
// }
// let number = 0;
// while (number < 5) {
//   number++;
//   console.log(number);
// }

function deleteHTML() {
  listHeader.textContent = "";
}
function clearALL() {
  // deleteHTML();
  theList.length = 0;
}

function addToArray() {
  if (input.value !== "") {
    theList.push(input.value);
    console.log(theList);
    arrayToHTML();
    input.value = "";
  }
}

function arrayToHTML() {
  deleteHTML();
  for (let i = 0; i < theList.length; i++) {
    const listItem = theList[i];
    const child = document.createElement("li");
    child.textContent = listItem;
    listHeader.appendChild(child);
  }
}

toArray.addEventListener("click", addToArray);
displayArray.addEventListener("click", arrayToHTML);
clear.addEventListener("click", () => {
  clearALL();
  deleteHTML();
});
input.addEventListener("keydown", (tast) => {
  if (tast.key === "Enter") {
    addToArray();
  }
});
