// explore.js

const textInput = document.querySelector("#text-to-speak");
const voiceSelect = document.querySelector("#voice-select");
const button = document.querySelector("button");
const faceImage = document.querySelector("img");
function init() {
  // TODO
  button.addEventListener('click', speak);
}

function populateVoiceList() {
  voices = window.speechSynthesis.getVoices();
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
  synth = window.speechSynthesis
  for (let i =0; i <voices.length; i++){
    if (voices[i] == choice){
      utterThis.voice
    }
  }
}