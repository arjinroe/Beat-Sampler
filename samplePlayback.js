// Enable WebMidi API and handle any errors if it fails to enable.
// This is necessary to work with MIDI devices in the web browser.
await WebMidi.enable();

//initialize variables for MIDI
let myInput = WebMidi.inputs[0];
let myOutput = WebMidi.outputs[0];


// Get the dropdown elements from the HTML document by their IDs.
// These dropdowns will be used to display the MIDI input devices available.
let dropIns = document.getElementById("dropdown-ins");

// For each MIDI input device detected, add an option to the input devices dropdown.
// This loop iterates over all detected input devices, adding them to the dropdown.
WebMidi.inputs.forEach(function (input, num) {
    dropIns.innerHTML += `<option value=${num}>${input.name}</option>`;
  });


// Add an event listener for the 'change' event on the input devices dropdown.
// This allows the script to react when the user selects a different MIDI input device.
dropIns.addEventListener("change", function () {
    // Before changing the input device, remove any existing event listeners
    // to prevent them from being called after the device has been changed.
    if (myInput.hasListener("noteon")) {
      myInput.removeListener("noteon");
    }
    if (myInput.hasListener("noteoff")) {
      myInput.removeListener("noteoff");
    }
  
    // Change the input device based on the user's selection in the dropdown.
    myInput = WebMidi.inputs[dropIns.value];
  
    // After changing the input device, add new listeners for 'noteon' and 'noteoff' events.
    // These listeners will handle MIDI note on (key press) and note off (key release) messages.
    myInput.addListener("noteon", function (someMIDI) {
      // When a note on event is received, send a note on message to the output device.
      // This can trigger a sound or action on the MIDI output device.
      myOutput.sendNoteOn(someMIDI.note);
      console.log(someMIDI.note.number);
      if (someMIDI.note.number == 60) {
        kick1.play();
      }
      else if (someMIDI.note.number == 62) {
        kick2.play();
      }
      else if (someMIDI.note.number == 64) {
        snare1.play();
      }
      else if (someMIDI.note.number == 65) {
        snare2.play();
      }
      else if (someMIDI.note.number == 67) {
        hatClosed.play();
      }
      else if (someMIDI.note.number == 69) {
        hatOpen.play();
      }
      else if (someMIDI.note.number == 71) {
        tom1.play();
      }
      else if (someMIDI.note.number == 72) {
        tom2.play();
      }
      else if (someMIDI.note.number == 74) {
        tom3.play();
      }
    });
  
  
  
    myInput.addListener("noteoff", function (someMIDI) {
      // Similarly, when a note off event is received, send a note off message to the output device.
      // This signals the end of a note being played.
      myOutput.sendNoteOff(someMIDI.note);
    });
  });




//link to HTML buttons in JS
const playKick1 = document.querySelector(".play");
const playKick2 = document.querySelector(".play2");
const playSnare1 = document.querySelector(".play3");
const playSnare2 = document.querySelector(".play4");
const playHatsClosed = document.querySelector(".play5");
const playHatsOpen = document.querySelector(".play6");
const playToms1 = document.querySelector(".play7");
const playToms2 = document.querySelector(".play8");
const playToms3 = document.querySelector(".play9");

//create audio context
const audioContext = new AudioContext();

//link to audio files
const kick1 = new Audio ("./kick.wav");
const kick2 = new Audio ("./kick2.wav");
const snare1 = new Audio ("./snare.wav");
const snare2 = new Audio ("./snare2.wav");
const hatClosed = new Audio ("./hh-closed.wav");
const hatOpen = new Audio ("./hh-open.wav");
const tom1 = new Audio ("./tom1.wav");
const tom2 = new Audio ("./tom2.wav");
const tom3 = new Audio ("./tom3.wav");

const source = audioContext.createMediaElementSource(kick1);
const source2 = audioContext.createMediaElementSource(kick2);
const source3 = audioContext.createMediaElementSource(snare1);
const source4 = audioContext.createMediaElementSource(snare2);
const source5 = audioContext.createMediaElementSource(hatClosed);
const source6 = audioContext.createMediaElementSource(hatOpen);
const source7 = audioContext.createMediaElementSource(tom1);
const source8 = audioContext.createMediaElementSource(tom2);
const source9 = audioContext.createMediaElementSource(tom3);

source.connect(audioContext.destination);
source2.connect(audioContext.destination);
source3.connect(audioContext.destination);
source4.connect(audioContext.destination);
source5.connect(audioContext.destination);
source6.connect(audioContext.destination);
source7.connect(audioContext.destination);
source8.connect(audioContext.destination);
source9.connect(audioContext.destination);

//event listeners
playKick1.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        console.log(audioContext);
    };
    kick1.play();
});

playKick2.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        console.log(audioContext);
    };
    kick2.play();
});

playSnare1.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        console.log(audioContext);
    };
    snare1.play();
});

playSnare2.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        console.log(audioContext);
    };
    snare2.play();
});

playHatsClosed.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        console.log(audioContext);
    };
    hatClosed.play();
});

playHatsOpen.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        console.log(audioContext);
    };
    hatOpen.play();
});

playToms1.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        console.log(audioContext);
    };
    tom1.play();
});

playToms2.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        console.log(audioContext);
    };
    tom2.play();
});

playToms3.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        console.log(audioContext);
    };
    tom3.play();
});





