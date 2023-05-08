// explore.js
window.addEventListener('DOMContentLoaded', init);
const textInput = document.querySelector("#text-to-speak");
const voiceSelect = document.querySelector("#voice-select");
const button = document.querySelector("button");
const faceImage = document.querySelector("img");
function init() {
  // TODO
  populateVoiceList();
  window.speechSynthesis.addEventListener('voiceschanged', populateVoiceList);
  button.addEventListener('click', speak);
}

function populateVoiceList() {
  voices = window.speechSynthesis.getVoices();
  console.log(voices.length);
  for (let i =0; i < voices.length; i++){
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}

function speak(){
  voices = window.speechSynthesis.getVoices();
  choice = document.querySelector('#voice-select option:checked');
  synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  for (let i =0; i <voices.length; i++){
    if (voices[i].name == choice){
      utterThis.voice = voices[i];
    }
  }
  utterThis.addEventListener('start', () => {
    const img = document.querySelector('img');
    img.src = 'assets/images/smiling-open.png';
  });
  utterThis.addEventListener('end', () => {
    const img = document.querySelector('img');
    img.src = 'assets/images/smiling.png';
  });

  synth.speak(utterThis);
}