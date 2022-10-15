import {
  sliderForest,
  sliderRain,
  sliderCoffee,
  sliderFire,
  sliderCell
} from './elements.js';

export default function () {

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
  const audioForest = new Audio("sound/Floresta.wav");
  const audioRain = new Audio("sound/Chuva.wav");
  const audioCoffee = new Audio("sound/Cafeteria.wav");
  const audioFire = new Audio("sound/Lareira.wav");
  audioForest.loop = true;
  audioRain.loop = true;
  audioCoffee.loop = true;
  audioFire.loop = true;

  function pressButton() {
    buttonPressAudio.play();
  }

  function muted() {
    audioForest.pause();
    audioRain.pause();
    audioCoffee.pause();
    audioFire.pause();
    buttonPressAudio.play();
  }

  function timeEnd() {
    kitchenTimer.play();
  }

  function forest() {
    audioForest.play();
    audioRain.pause();
    audioCoffee.pause();
    audioFire.pause();
  }

  function rain() {
    audioForest.pause();
    audioRain.play();
    audioCoffee.pause();
    audioFire.pause();
  }

  function coffee() {
    audioForest.pause();
    audioRain.pause();
    audioCoffee.play();
    audioFire.pause();
  }

  function fire() {
    audioForest.pause();
    audioRain.pause();
    audioCoffee.pause();
    audioFire.play();
  }

  sliderCell.addEventListener('input', () => {
    audioForest.volume = sliderCell.value / 100;
    audioRain.volume = sliderCell.value / 100;
    audioCoffee.volume = sliderCell.value / 100;
    audioFire.volume = sliderCell.value / 100;
  });

  sliderForest.addEventListener('input', () => {
    audioForest.volume = sliderForest.value / 100;
  });

  sliderRain.addEventListener('input', () => {
    audioRain.volume = sliderRain.value / 100;
  });

  sliderCoffee.addEventListener('input', () => {
    audioCoffee.volume = sliderCoffee.value / 100;
  });

  sliderFire.addEventListener('input', () => {
    audioFire.volume = sliderFire.value / 100;
  })

  return {
    pressButton,
    timeEnd,
    forest,
    rain,
    coffee,
    fire,
    muted,
    audioForest,
    audioRain,
    audioCoffee,
    audioFire
  }

}