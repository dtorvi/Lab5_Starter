// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti();
  const hornSelect = document.getElementById('horn-select');
  const volume = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audio = document.querySelector('audio');
  const playButton = document.querySelector('button');
  const exposeSection = document.querySelector('#expose');

  hornSelect.addEventListener('change', updateHorn);
  volumeInput.addEventListener('input', updateVolume);
  playButton.addEventListener('click', playSound);
}