export default function Controls({
  playButton,
  pauseButton,
  moreMinutesButton,
  lessMinutesButton,
  lightMode,
  darkMode,
  mode
}) {

  const bgForest = document.querySelector('.bg-forest');
  const bgRain = document.querySelector('.bg-rain');
  const bgCoffee = document.querySelector('.bg-coffee');
  const bgFire = document.querySelector('.bg-fire');

  function reset() {
    playButton.classList.remove('hide');
    pauseButton.classList.add('hide');
    moreMinutesButton.classList.remove('hide');
    lessMinutesButton.classList.remove('hide');
  }

  function play() {
    playButton.classList.add('hide');
    pauseButton.classList.remove('hide');
    moreMinutesButton.classList.add('hide');
    lessMinutesButton.classList.add('hide');
  }

  function pause() {
    pauseButton.classList.add('hide');
    playButton.classList.remove('hide');
  }

  function day() {
    lightMode.classList.add('hide');
    darkMode.classList.remove('hide');
    mode.classList.remove('dark');
  }

  function night() {
    lightMode.classList.remove('hide');
    darkMode.classList.add('hide');
    mode.classList.add('dark');
  }

  function forest() {
    document.getElementById('slider-cell').style.visibility = 'visible';
    document.getElementById('slider-forest').style.visibility = 'visible';
    document.getElementById('slider-rain').style.visibility = 'hidden';
    document.getElementById('slider-coffee').style.visibility = 'hidden';
    document.getElementById('slider-fire').style.visibility = 'hidden';
    bgForest.classList.remove('hide');
    bgRain.classList.add('hide');
    bgCoffee.classList.add('hide');
    bgFire.classList.add('hide');
    darkMode.classList.add('modeEnabled');
  }

  function rain() {
    document.getElementById('slider-cell').style.visibility = 'visible';
    document.getElementById('slider-forest').style.visibility = 'hidden';
    document.getElementById('slider-rain').style.visibility = 'visible';
    document.getElementById('slider-coffee').style.visibility = 'hidden';
    document.getElementById('slider-fire').style.visibility = 'hidden';
    bgForest.classList.add('hide');
    bgRain.classList.remove('hide');
    bgCoffee.classList.add('hide');
    bgFire.classList.add('hide');
    darkMode.classList.add('modeEnabled');
  }

  function coffee() {
    document.getElementById('slider-cell').style.visibility = 'visible';
    document.getElementById('slider-forest').style.visibility = 'hidden';
    document.getElementById('slider-rain').style.visibility = 'hidden';
    document.getElementById('slider-coffee').style.visibility = 'visible';
    document.getElementById('slider-fire').style.visibility = 'hidden';
    bgForest.classList.add('hide');
    bgRain.classList.add('hide');
    bgCoffee.classList.remove('hide');
    bgFire.classList.add('hide');
    darkMode.classList.add('modeEnabled');
  }

  function fire() {
    document.getElementById('slider-cell').style.visibility = 'visible';
    document.getElementById('slider-forest').style.visibility = 'hidden';
    document.getElementById('slider-rain').style.visibility = 'hidden';
    document.getElementById('slider-coffee').style.visibility = 'hidden';
    document.getElementById('slider-fire').style.visibility = 'visible';
    bgForest.classList.add('hide');
    bgRain.classList.add('hide');
    bgCoffee.classList.add('hide');
    bgFire.classList.remove('hide');
    darkMode.classList.add('modeEnabled');
  }

  function pressMute() {
    bgForest.classList.add('hide');
    bgRain.classList.add('hide');
    bgCoffee.classList.add('hide');
    bgFire.classList.add('hide');
    darkMode.classList.remove('modeEnabled');
  }

  return {
    reset,
    play,
    pause,
    day,
    night,
    forest,
    rain,
    coffee,
    fire,
    pressMute
  }

}
