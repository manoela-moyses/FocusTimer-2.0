const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');
const moreMinutesButton = document.querySelector('.more-min');
const lessMinutesButton = document.querySelector('.less-min');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const forestMode = document.querySelector('.forest');
const rainMode = document.querySelector('.rain');
const coffeeMode = document.querySelector('.coffee');
const fireMode = document.querySelector('.fire');
const lightMode = document.querySelector('.sun');
const darkMode = document.querySelector('.moon');
const mode = document.querySelector('.light');
const returnButton = document.querySelector('.return-btn');
const sliderForest = document.querySelector('#slider-forest');
const sliderRain = document.querySelector('#slider-rain');
const sliderCoffee = document.querySelector('#slider-coffee');
const sliderFire = document.querySelector('#slider-fire');
const sliderCell = document.querySelector('#slider-cell');

export {
  playButton,
  pauseButton,
  stopButton,
  moreMinutesButton,
  lessMinutesButton,
  minutesDisplay,
  secondsDisplay,
  forestMode,
  rainMode,
  coffeeMode,
  fireMode,
  lightMode,
  darkMode,
  mode,
  returnButton,
  sliderForest,
  sliderRain,
  sliderCoffee,
  sliderFire,
  sliderCell
}