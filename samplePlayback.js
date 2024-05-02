// Enable WebMidi API and handle any errors if it fails to enable.
// This is necessary to work with MIDI devices in the web browser.
await WebMidi.enable();

//initialize variables for MIDI
let myInput = WebMidi.inputs[0];
let myOutput = WebMidi.outputs[0];


// Get the dropdown elements from the HTML document by their IDs.
// These dropdowns will be used to display the MIDI input devices available.
let dropIns = document.getElementById("dropdown-ins");
let bankSelect = document.getElementById("bankSelect");

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
      if (someMIDI.note.number == 36 && bankSelect.value == "bankA") {
        aKick1.play();
      }
      else if (someMIDI.note.number == 36 && bankSelect.value == "bankB") {
        bKick1.play();
      }

      else if (someMIDI.note.number == 37 && bankSelect.value == "bankA") {
        aKick2.play();
      }
      else if (someMIDI.note.number == 37 && bankSelect.value == "bankB") {
        bKick2.play();
      }

      else if (someMIDI.note.number == 38 && bankSelect.value == "bankA") {
        aSnare1.play();
      }
      else if (someMIDI.note.number == 38 && bankSelect.value == "bankB") {
        bSnare1.play();
      }

      else if (someMIDI.note.number == 39 && bankSelect.value == "bankA") {
        aSnare2.play();
      }
      else if (someMIDI.note.number == 39 && bankSelect.value == "bankB") {
        bSnare2.play();
      }

      else if (someMIDI.note.number == 40 && bankSelect.value == "bankA") {
        aHatClosed.play();
      }
      else if (someMIDI.note.number == 40 && bankSelect.value == "bankB") {
        bHatClosed.play();
      }

      else if (someMIDI.note.number == 41 && bankSelect.value == "bankA") {
        aHatOpen.play();
      }
      else if (someMIDI.note.number == 41 && bankSelect.value == "bankB") {
        bHatOpen.play();
      }

      else if (someMIDI.note.number == 42 && bankSelect.value == "bankA") {
        aTom1.play();
      }
      else if (someMIDI.note.number == 42 && bankSelect.value == "bankB") {
        bTom1.play();
      }

      else if (someMIDI.note.number == 43 && bankSelect.value == "bankA") {
        aTom2.play();
      }
      else if (someMIDI.note.number == 43 && bankSelect.value == "bankB") {
        bTom2.play();
      }

      else if (someMIDI.note.number == 44 && bankSelect.value == "bankA") {
        aTom3.play();
      }
      else if (someMIDI.note.number == 44 && bankSelect.value == "bankB") {
        bTom3.play();
      }
    });
  
  
  
    myInput.addListener("noteoff", function (someMIDI) {
      // Similarly, when a note off event is received, send a note off message to the output device.
      // This signals the end of a note being played.
      myOutput.sendNoteOff(someMIDI.note);
    });
  });

  bankSelect.addEventListener("change", function () {
    console.log(bankSelect.value);
    return bankSelect;
  });


//link to HTML buttons in JS
const bankAS = 0;
const bankBS = 0;
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

// let kick1;
// let kick2;
// let snare1;
// let snare2;
// let hatClosed;
// let hatOpen;
// let tom1;
// let tom2;
// let tom3;

//link to audio files
let aKick1 = new Audio ("./kick.wav");
let aKick2 = new Audio ("./kick2.wav");
let aSnare1 = new Audio ("./snare.wav");
let aSnare2 = new Audio ("./snare2.wav");
let aHatClosed = new Audio ("./hh-closed.wav");
let aHatOpen = new Audio ("./hh-open.wav");
let aTom1 = new Audio ("./tom1.wav");
let aTom2 = new Audio ("./tom2.wav");
let aTom3 = new Audio ("./tom3.wav");

let bKick1 = new Audio ("./b-kick.wav");
let bKick2 = new Audio ("./b-kick2.wav");
let bSnare1 = new Audio ("./b-snare1.wav");
let bSnare2 = new Audio ("./b-snare2.wav");
let bHatClosed = new Audio ("./b-hh-closed.wav");
let bHatOpen = new Audio ("./b-hh-open.wav");
let bTom1 = new Audio ("./b-tom1.wav");
let bTom2 = new Audio ("./b-tom2.wav");
let bTom3 = new Audio ("./b-tom3.wav");



// selectBankA.addEventListener("click", bankAClick);
// selectBankB.addEventListener("click", bankBClick);



const source = audioContext.createMediaElementSource(aKick1);
const source2 = audioContext.createMediaElementSource(aKick2);
const source3 = audioContext.createMediaElementSource(aSnare1);
const source4 = audioContext.createMediaElementSource(aSnare2);
const source5 = audioContext.createMediaElementSource(aHatClosed);
const source6 = audioContext.createMediaElementSource(aHatOpen);
const source7 = audioContext.createMediaElementSource(aTom1);
const source8 = audioContext.createMediaElementSource(aTom2);
const source9 = audioContext.createMediaElementSource(aTom3);

const source10 = audioContext.createMediaElementSource(bKick1);
const source11 = audioContext.createMediaElementSource(bKick2);
const source12 = audioContext.createMediaElementSource(bSnare1);
const source13 = audioContext.createMediaElementSource(bSnare2);
const source14 = audioContext.createMediaElementSource(bHatClosed);
const source15 = audioContext.createMediaElementSource(bHatOpen);
const source16 = audioContext.createMediaElementSource(bTom1);
const source17 = audioContext.createMediaElementSource(bTom2);
const source18 = audioContext.createMediaElementSource(bTom3);

source.connect(audioContext.destination);
source2.connect(audioContext.destination);
source3.connect(audioContext.destination);
source4.connect(audioContext.destination);
source5.connect(audioContext.destination);
source6.connect(audioContext.destination);
source7.connect(audioContext.destination);
source8.connect(audioContext.destination);
source9.connect(audioContext.destination);

source10.connect(audioContext.destination);
source11.connect(audioContext.destination);
source12.connect(audioContext.destination);
source13.connect(audioContext.destination);
source14.connect(audioContext.destination);
source15.connect(audioContext.destination);
source16.connect(audioContext.destination);
source17.connect(audioContext.destination);
source18.connect(audioContext.destination);

//event listeners
playKick1.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        console.log(audioContext);
    };
    if (bankSelect.value == "bankA") {
      aKick1.play();
    }
    else if (bankSelect.value == "bankB") {
      bKick1.play();
    }
    
});

playKick2.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        console.log(audioContext);
    };
    if (bankSelect.value == "bankA") {
      aKick2.play();
    }
    else if (bankSelect.value == "bankB") {
      bKick2.play();
    }
});

playSnare1.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        console.log(audioContext);
    };
    if (bankSelect.value == "bankA") {
      aSnare1.play();
    }
    else if (bankSelect.value == "bankB") {
      bSnare1.play();
    }
});

playSnare2.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        console.log(audioContext);
    };
    if (bankSelect.value == "bankA") {
      aSnare2.play();
    }
    else if (bankSelect.value == "bankB") {
      bSnare2.play();
    }
});

playHatsClosed.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        console.log(audioContext);
    };
    if (bankSelect.value == "bankA") {
      aHatClosed.play();
    }
    else if (bankSelect.value == "bankB") {
      bHatClosed.play();
    }
});

playHatsOpen.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        console.log(audioContext);
    };
    if (bankSelect.value == "bankA") {
      aHatOpen.play();
    }
    else if (bankSelect.value == "bankB") {
      bHatOpen.play();
    }
});

playToms1.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        console.log(audioContext);
    };
    if (bankSelect.value == "bankA") {
      aTom1.play();
    }
    else if (bankSelect.value == "bankB") {
      bTom1.play();
    }
});

playToms2.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        console.log(audioContext);
    };
    if (bankSelect.value == "bankA") {
      aTom2.play();
    }
    else if (bankSelect.value == "bankB") {
      bTom2.play();
    }
});

playToms3.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        console.log(audioContext);
    };
    if (bankSelect.value == "bankA") {
      aTom3.play();
    }
    else if (bankSelect.value == "bankB") {
      bTom3.play();
    }
});





