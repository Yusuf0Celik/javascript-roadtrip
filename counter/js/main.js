console.log('main.js loaded');

const btns = document.querySelectorAll('.btn');
const counterTeller = document.querySelector('.counter-teller');

let counter = 0

btns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const target = e.target.classList
    if (target.contains("decrease")) {
      counter--;
    } else if (target.contains("reset")) {
      counter = 0;
    } else if (target.contains("increase")) {
      counter++;
    }
    counterTeller.textContent = counter
  })
});
counterTeller.textContent = counter