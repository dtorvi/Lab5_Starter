// explore.js

const textInput = document.querySelector("#text-to-speak");
const voiceSelect = document.querySelector("#voice-select");
const button = document.querySelector("button");
const faceImage = document.querySelector("img");
function init() {
  // TODO
}

function populateVoiceList() {
  voices = window.speechSynthesis.getVoices();
  for (let i =0; i < voices.length; i++){
    
  }
}