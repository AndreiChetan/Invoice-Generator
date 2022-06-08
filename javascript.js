const services = {
  "Car wash": 10,
  "Maw Lawn": 20,
  "Pull Weeds": 30,
};

let washCar = document.getElementById("wash-btn");
let mawLawn = document.getElementById("maw-btn");
let pullWeeds = document.getElementById("pull-btn");
const task = document.getElementById("task-el");
const total = document.getElementById("total-el");
const notes = document.getElementById("notes-el");
const totalSum = document.getElementById("sum-el");
const sendInvoice = document.getElementById("invoice");

let keys = Object.keys(services);
let values = Object.values(services);
let startTotal = 0;

washCar.addEventListener("click", () => {
  let liTask = document.createElement("li");
  let liTotal = document.createElement("li");
  let removeBtn1 = document.createElement("button");

  removeBtn1.innerText = "x";
  removeBtn1.style.cssText = `
    display: flex;
    heigth: 2px;
    position: relative;
    align-items: center;
    background: none;
    font-size: 11px;
    border: none;
    color: red;
    bottom: 30px;
    left: 65px;
  `;

  liTask.textContent = keys[0];
  liTotal.textContent = "$ " + values[0];

  task.appendChild(liTask);
  task.appendChild(removeBtn1);
  total.appendChild(liTotal);

  notes.style.cssText = `
    font-size: 12px;
    font-weight: 300;
    font-style: italic;
    color: rgb(255, 178, 178);
  `;
  notes.textContent = "We make no refunds!";

  renderTotal(10);
  washCar.style.filter = "brightness(30%)";
  washCar.disabled = true;

  removeBtn1.addEventListener("click", () => {
    liTask.parentNode.removeChild(liTask);
    liTotal.parentNode.removeChild(liTotal);
    removeBtn1.parentNode.removeChild(removeBtn1);
    washCar.disabled = false;
    washCar.style.filter = "brightness(100%)";
  });
});

mawLawn.addEventListener("click", () => {
  let liTask = document.createElement("li");
  let liTotal = document.createElement("li");
  let removeBtn2 = document.createElement("button");

  removeBtn2.innerText = "x";
  removeBtn2.style.cssText = `
    display: flexbox;
    position: relative;
    align-items: center;
    background: none;
    font-size: 11px;
    margin: 0;
    padding: 0;
    border: none;
    color: red;
    bottom: 40px;
    left: 65px;
  `;

  liTask.textContent = keys[1];
  liTotal.textContent = "$ " + values[1];

  task.appendChild(liTask);
  total.appendChild(liTotal);

  notes.style.cssText = `
    font-size: 12px;
    font-weight: 300;
    font-style: italic;
    color: rgb(255, 178, 178);
  `;
  notes.textContent = "We make no refunds!";

  renderTotal(20);
  mawLawn.style.filter = "brightness(30%)";
  mawLawn.disabled = true;

  removeBtn2.addEventListener("click", () => {
    liTask.parentNode.removeChild(liTask);
    liTotal.parentNode.removeChild(liTotal);
    removeBtn2.parentNode.removeChild(removeBtn2);
    mawLawn.disabled = false;
    mawLawn.style.filter = "brightness(100%)";
  });
});

pullWeeds.addEventListener("click", () => {
  let liTask = document.createElement("li");
  let liTotal = document.createElement("li");
  let removeBtn3 = document.createElement("button");

  removeBtn3.innerText = "x";
  removeBtn3.style.cssText = `
    display: flexbox;
    position: relative;
    align-items: center;
    background: none;
    font-size: 11px;
    margin: 0;
    padding: 0;
    border: none;
    color: red;
    bottom: 40px;
    left: 65px;
  `;

  liTask.textContent = keys[2];
  liTotal.textContent = "$ " + values[2];

  task.appendChild(liTask);
  total.appendChild(liTotal);

  notes.style.cssText = `
    font-size: 12px;
    font-weight: 300;
    font-style: italic;
    color: rgb(255, 178, 178);
  `;
  notes.textContent = "We make no refunds!";

  renderTotal(30);
  pullWeeds.style.filter = "brightness(30%)";
  pullWeeds.disabled = true;

  removeBtn3.addEventListener("click", () => {
    liTask.parentNode.removeChild(liTask);
    liTotal.parentNode.removeChild(liTotal);
    removeBtn3.parentNode.removeChild(removeBtn3);
    pullWeeds.disabled = false;
    pullWeeds.style.filter = "brightness(100%)";
  });
});

function renderTotal(num) {
  let total = (startTotal += num);
  totalSum.textContent = `$ ${total}`;

  if (total === 0) {
    totalSum.innerHTML = 0;
  }
}

sendInvoice.addEventListener("click", () => {
  document.location.reload();
});
