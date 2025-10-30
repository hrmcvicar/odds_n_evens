//---State---

//# of numbers
let numberBank = [];
//want start to be an array

//create an evens array
let evens = [];

//create an odds array
let odds = [];

// -- State Mutators --
//1 need to make addtobank function
function addToBank(n) {
  if (!Number.isFinite(n)) return;
  numberBank.push(n);
}

//2 need to make sortOne function
function sortOne() {
  if (numberBank.length === 0) return;
  const n = numberBank.shift();
  if (n % 2 === 0) {
    evens.push(n);
  } else {
    odds.push(n);
  }
}
//“If there are numbers left, take the first one
// from the number bank and move it into the
// correct bucket — even or odd.”

//3 need to make sortAll function
//while loop runs as long as condition is true
//keeps running to sortOne as long as there are numbers
function sortAll() {
  while (numberBank.length) sortOne();
}

// --components--

//change this to be a function that makes controls
function makeControls() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    
    <h1>Odds & Evens</h1>
    <label>
      Add a number to the bank
      <input name="number" type="number" required/>
    </label>
    <div style="display:flex; gap:.5rem; margin-top:.5rem;">
       <button type="button" class="addBtn">Add</button>
        <button type="button" class="sort1Btn">Sort 1</button>
        <button type="button" class="sortAllBtn">Sort All</button>
    </div>
  `;
  //label wraps text together
  //input type is number so only numbers
  //required makes it mandatory
  //making them all type submit they respond to below the same
  const input = $form.querySelector("input");
  const addBtn = $form.querySelector(".addBtn");
  const sort1Btn = $form.querySelector(".sort1Btn");
  const sortAllBtn = $form.querySelector(".sortAllBtn");

  // --- separate event listeners ---
  addBtn.addEventListener("click", () => {
    const num = Number(input.value);
    addToBank(num);
    input.value = "";
    render();
  });

  sort1Btn.addEventListener("click", () => {
    sortOne();
    render();
  });

  sortAllBtn.addEventListener("click", () => {
    sortAll();
    render();
  });

  return $form;
}

/*$form.addEventListener("submit", (event) => {
    event.preventDefault();

    const action = event.submitter?.value;
    const data = new FormData($form);
    const num = Number(data.get("number"));
    //numberBank.push(num);
    if (action === "add") addToBank(num);
    if (action === "sort1") sortOne();
    if (action === "sortAll") sortAll();*/

/*
function makeNumberBank() {
  const $numberBank = document.createElement("p");
  $numberBank.classList.add("numberBank");
  //wordList.innerHTML = wordElements.join("")
  //join makes them a big string
  $numberBank.textContent = `Number Bank: ${numberBank.join(", ")}`;
  return $numberBank;
}*/

/*
function sort(addNumber) {
  if (numberBank.length <= 0) return;
  let evens = [];
  let odds = [];
  if (numberBank[i] % 2 === 0) {
    return evens;
  }
  if (numberBank[i] % 2 !== 0) {
    return odds;
  }
  render();
}
*/

function makeList(title, arr) {
  const $section = document.createElement("section");
  const $h2 = document.createElement("h2");
  $h2.textContent = `${title}`;
  const $p = document.createElement("p");

  if (arr.length > 0) {
    $p.textContent = arr.join(", ");
  } else {
    $p.textContent = "-";
  }
  $section.append($h2, $p);
  return $section;
}

function makeBankView() {
  return makeList("Bank", numberBank);
}
function makeEvensView() {
  return makeList("Evens", evens);
}
function makeOddsView() {
  return makeList("Odds", odds);
}

//--Render--
function render() {
  document.body.innerHTML = "";

  document.body.append(
    makeControls(),
    makeBankView(),
    makeEvensView(),
    makeOddsView()
  );
}

//--Start app--
render();
