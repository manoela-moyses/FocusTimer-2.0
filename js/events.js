import {
  playButton,
  pauseButton,
  stopButton,
  moreMinutesButton,
  lessMinutesButton,
  lightMode,
  darkMode,
  forestMode,
  rainMode,
  coffeeMode,
  fireMode,
  returnButton,
} from './elements.js';

export default function ({ controls, timer, sound }) {

  playButton.addEventListener('click', function () {
    controls.play();
    timer.countdown();
    sound.pressButton();
  });

  pauseButton.addEventListener('click', function () {
    controls.pause();
    timer.hold();
    sound.pressButton();
  });

  stopButton.addEventListener('click', function () {
    controls.reset();
    timer.reset();
    sound.pressButton();
  });

  moreMinutesButton.addEventListener('click', function () {
    timer.increase();
    sound.pressButton();
  });

  lessMinutesButton.addEventListener('click', function () {
    timer.decrease();
    sound.pressButton();
  });

  lightMode.addEventListener('click', function () {
    controls.day();
    sound.pressButton();
  });

  darkMode.addEventListener('click', function () {
    controls.night();
    sound.pressButton();
  });

  forestMode.addEventListener('click', function () {
    controls.forest();
    sound.forest();
    returnButton.classList.remove('hide');
  });

  rainMode.addEventListener('click', function () {
    controls.rain();
    sound.rain();
    returnButton.classList.remove('hide');
  });

  coffeeMode.addEventListener('click', function () {
    controls.coffee();
    sound.coffee();
    returnButton.classList.remove('hide');
  });

  fireMode.addEventListener('click', function () {
    controls.fire();
    sound.fire();
    returnButton.classList.remove('hide');
  });

  returnButton.addEventListener('click', function () {
    controls.pressMute();
    sound.muted();
    returnButton.classList.add('hide');
    document.getElementById('slider-cell').style.visibility = 'hidden';
  });

}