// explore.js

const textInput = document.querySelector("#text-to-speak");
const voiceSelect = document.querySelector("#voice-select");
const button = document.querySelector("button");
const faceImage = document.querySelector("img");
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

function hornType(){
  document.querySelector('img').src="assets/images"+hornSelect+".svg";
}

function updateVolume(){
  const volumeIcon = document.querySelector('#volume-controls img');
  if (volume == 0){
    volumeIcon.src = 'assets/icons/volume-level-0.svg';
  }
  else if 
}