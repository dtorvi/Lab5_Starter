// explore.js
window.addEventListener('DOMContentLoaded', init);
var textInput = document.querySelector("#text-to-speak");
var voiceSelect = document.querySelector("#voice-select");
var button = document.querySelector("button");
var faceImage = document.querySelector("img");
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
    var option = document.createElement("option");
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