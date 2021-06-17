const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');
let intervalID = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtnRef.addEventListener('click', onClickSwitchColor);
stopBtnRef.addEventListener('click', onClickStopSwitchingClrs);

function onClickSwitchColor() {
  startBtnRef.setAttribute('disabled', true);

  intervalID = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
}

function onClickStopSwitchingClrs() {
  clearInterval(intervalID);
  startBtnRef.removeAttribute('disabled');
}
