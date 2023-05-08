// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti();
  const hornSelect = document.getElementById('horn-select');
  const volume = document.getElementById('volume');
  const audio = document.querySelector('audio');
  const playButton = document.querySelector('button');

  hornSelect.addEventListener('change', hornType);
  volumeInput.addEventListener('input', updateVolume);
  playButton.addEventListener('click', playSound);
}

function c