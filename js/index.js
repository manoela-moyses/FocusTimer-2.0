import Controls from './controls.js';
import Timer from './timer.js';
import Sound from './sounds.js';
import Events from './events.js';
import {
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
} from './elements.js';

const controls = Controls({
  playButton,
  pauseButton,
  moreMinutesButton,
  lessMinutesButton,
  lightMode,
  darkMode,
  mode
});

const sound = Sound();

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  sound,
  controls,
  resetControls: controls.reset
});


Events({ controls, timer, sound });