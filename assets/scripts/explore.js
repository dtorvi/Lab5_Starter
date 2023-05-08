// explore.js
window.addEventListener('DOMContentLoaded', init);
var textInput = document.getElementById("text-to-speak");
var voiceSelect = document.querySelector("#voice-select");
var button = document.querySelector("button");
var faceImage = document.querySelector("img");
function init() {
  // TODO
  speechSynthesis;
  populateVoiceList();
  window.speechSynthesis.addEventListener('voiceschanged', populateVoiceList);
  button.addEventListener('click', speak);
}

function populateVoiceList() {
  const voices = window.speechSynthesis.getVoices();
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
  const voices = window.speechSynthesis.getVoices();
  const choice = document.querySelector('#voice-select option:checked');
  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(textInput.value);
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