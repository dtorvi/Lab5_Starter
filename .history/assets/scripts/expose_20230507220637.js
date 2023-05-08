// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const volume = document.getElementById('volume');
  const playButton = document.querySelector('button');

  hornSelect.addEventListener('change', hornType);
  volume.addEventListener('input', updateVolumeIcon);
  playButton.addEventListener('click', playSound);
}

function hornType(){
  document.querySelector('img').src="assets/images"+hornSelect+".svg";
}

function updateVolumeIcon(){
  const volumeIcon = document.querySelector('#volume-controls img');
  
  audio.volume = volume/100
  if (volume == 0){
    volumeIcon.src = 'assets/icons/volume-level-0.svg';
  }
  else if (volume <= 33){
    volumeIcon.src = 'assets/icons/volume-level-1.svg';
  }
  else if (volume <= 66){
    volumeIcon.src = 'assets/icons/volume-level-2.svg';
  }
  else {
    volumeIcon.src = 'assets/icons/volume-level-3.svg';
  }
}

function playSound(event) {
  const jsConfetti = new JSConfetti();
  const audio = document.querySelector('audio');
  if (hornType == "party-horn"){
    jsConfetti.addConfetti();
  }
  audio.play()
}