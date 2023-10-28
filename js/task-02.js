/* Task 2 - Event delegation */

const divEl = document.querySelector(".container");
const countriesListEl = document.querySelector(".countries-list");


const handleCorrectClick = (e) => {
  const nodeEl = e.target.nodeName;     //* putea fi omis, nu era neaparat, in cazul asta //
  const parentNodeEl = e.target.parentNode;

  if (parentNodeEl === countriesListEl && nodeEl === "LI") {   
    const targetText = e.target.textContent;
    
    console.log("Ai dat click pe:", targetText)
  };
};

countriesListEl.addEventListener("click", handleCorrectClick);