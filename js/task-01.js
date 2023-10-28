/* Task 1 - Section Exercise - Bubbling: */

const parentEl = document.querySelector(".section-exercise");
const childEl = document.querySelector(".section-exercise div");
const descendentEl = document.querySelector(".section-exercise p");

parentEl.addEventListener("click", () => {
  console.log("Click on parent")
});

childEl.addEventListener("click", (e) => {
  console.log("Click on child");
});

// stopPropagation() //
descendentEl.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  console.log("Click on descendent")
});