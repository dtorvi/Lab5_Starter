// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volume = document.getElementById('volume');
  const playButton = document.querySelector('button');

  hornSelect.addEventListener('change', hornType);
  volume.addEventListener('input', updateVolumeIcon);
  playButton.addEventListener('click', playSound);
}

function hornType(){
  let hornSelect = document.getElementById('horn-select');
  document.querySelector('img').src="assets/images/"+hornSelect.value+".svg";
}

function updateVolumeIcon(){
  let volumeIcon = document.querySelector('#volume-controls img');
  let audio = document.querySelector('audio');
  audio.volume = volume.value/100;
  if (volume.value == 0){
    volumeIcon.src = 'assets/icons/volume-level-0.svg';
  }
  else if (volume.value <= 33){
    volumeIcon.src = 'assets/icons/volume-level-1.svg';
  }
  else if (volume.value <= 66){
    volumeIcon.src = 'assets/icons/volume-level-2.svg';
  }
  else {
    volumeIcon.src = 'assets/icons/volume-level-3.svg';
  }
}

function playSound() {
  let hornSelect = document.getElementById('horn-select');
  const jsConfetti = new JSConfetti();
  let audio = document.querySelector('audio');
  audio.src="assets/audio/"+hornSelect.value+".mp3";
  if (document.getElementById('horn-select').value == "party-horn"){
    jsConfetti.addConfetti();
  }
  audio.play();
}
