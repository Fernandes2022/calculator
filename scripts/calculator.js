console.log('hey')

let calculate = '';
function updateCalculator(value) {
  calculate += value;
  const show = document.querySelector('.show-result');
  show.classList.add('show');
  show.innerHTML = calculate;
}

document.querySelector('.clear').addEventListener('click', () => {
  calculate = '';
  const show = document.querySelector('.show-result');
  show.classList.add('show');
  show.innerHTML = calculate;
})

document.querySelector('.power').addEventListener('click', () => {
  updateCalculator('^');
})

document.querySelector('.percent').addEventListener('click', () => {
  updateCalculator('/100');
})

document.querySelector('.times').addEventListener('click', () => {
  updateCalculator('*');
})
document.querySelector('.one').addEventListener('click', () => {
  updateCalculator(1);
})

document.querySelector('.two').addEventListener('click', () => {
  updateCalculator(2);
})

document.querySelector('.three').addEventListener('click', () => {
  updateCalculator(3);
})

document.querySelector('.add').addEventListener('click', () => {
  updateCalculator('+');
})

document.querySelector('.four').addEventListener('click', () => {
  updateCalculator(4);
})

document.querySelector('.five').addEventListener('click', () => {
  updateCalculator(5);
})

document.querySelector('.six').addEventListener('click', () => {
  updateCalculator(6);
})

document.querySelector('.minus').addEventListener('click', () => {
  updateCalculator('-');
})
document.querySelector('.seven').addEventListener('click', () => {
  updateCalculator(7);
})

document.querySelector('.eight').addEventListener('click', () => {
  updateCalculator(8);
})

document.querySelector('.nine').addEventListener('click', () => {
  updateCalculator(9);
})

document.querySelector('.divide').addEventListener('click', () => {
  updateCalculator('/');
})
document.querySelector('.zero').addEventListener('click', () => {
  updateCalculator(0);
})
document.querySelector('.dot').addEventListener('click', () => {
  updateCalculator('.');
})
document.querySelector('.result').addEventListener('click', () => {
  calculate = eval(calculate);
  const show = document.querySelector('.show-result');
  show.classList.add('show');
  show.innerHTML = calculate;
})

