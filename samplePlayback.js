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
let mapSelect = document.getElementById("mapSelect");


//initialize MIDI Mapping Values
let midiVal = [36,37,38,40,41,42,44,45,46];

mapSelect.addEventListener("change", function (){
  if (mapSelect.value == "Nektar Aruba") {
    midiVal = [36,37,38,40,41,42,44,45,46];
  }
  else if (mapSelect.value == "Generic MIDI") {
    midiVal = [60,62,64,65,67,69,71,72,74];
  }
  return midiVal;
});



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

    // This listener function takes in the MIDI input and then depending on the
    // MIDI value it triggers different samples
    myInput.addListener("noteon", function (someMIDI) {
      // When a note on event is received, send a note on message to the output device.
      // This can trigger a sound or action on the MIDI output device.
      myOutput.sendNoteOn(someMIDI.note);
      // console.log(someMIDI.note.number);
      
      //KICK 1
      if (someMIDI.note.number == midiVal[0] && bankSelect.value == "bankA") {
        aKick1.play();
      }
      else if (someMIDI.note.number == midiVal[0] && bankSelect.value == "bankB") {
        bKick1.play();
      }
      else if (someMIDI.note.number == midiVal[0] && bankSelect.value == "bankC") {
        cKick1.play();
      }
      else if (someMIDI.note.number == midiVal[0] && bankSelect.value == "bankD") {
        dKick1.play();
      }

      //KICK 2
      else if (someMIDI.note.number == midiVal[1] && bankSelect.value == "bankA") {
        aKick2.play();
      }
      else if (someMIDI.note.number == midiVal[1] && bankSelect.value == "bankB") {
        bKick2.play();
      }
      else if (someMIDI.note.number == midiVal[1] && bankSelect.value == "bankC") {
        cKick2.play();
      }
      else if (someMIDI.note.number == midiVal[1] && bankSelect.value == "bankD") {
        dKick2.play();
      }

      //SNARE 1
      else if (someMIDI.note.number == midiVal[2] && bankSelect.value == "bankA") {
        aSnare1.play();
      }
      else if (someMIDI.note.number == midiVal[2] && bankSelect.value == "bankB") {
        bSnare1.play();
      }
      else if (someMIDI.note.number == midiVal[2] && bankSelect.value == "bankC") {
        cSnare1.play();
      }
      else if (someMIDI.note.number == midiVal[2] && bankSelect.value == "bankD") {
        dSnare1.play();
      }

      //SNARE 2
      else if (someMIDI.note.number == midiVal[3] && bankSelect.value == "bankA") {
        aSnare2.play();
      }
      else if (someMIDI.note.number == midiVal[3] && bankSelect.value == "bankB") {
        bSnare2.play();
      }
      else if (someMIDI.note.number == midiVal[3] && bankSelect.value == "bankC") {
        cSnare2.play();
      }
      else if (someMIDI.note.number == midiVal[3] && bankSelect.value == "bankD") {
        dSnare2.play();
      }

      //HI-HAT CLOSED
      else if (someMIDI.note.number == midiVal[4] && bankSelect.value == "bankA") {
        aHatClosed.play();
      }
      else if (someMIDI.note.number == midiVal[4] && bankSelect.value == "bankB") {
        bHatClosed.play();
      }
      else if (someMIDI.note.number == midiVal[4] && bankSelect.value == "bankC") {
        cHatClosed.play();
      }
      else if (someMIDI.note.number == midiVal[4] && bankSelect.value == "bankD") {
        dHatClosed.play();
      }

      //HI-HAT OPEN
      else if (someMIDI.note.number == midiVal[5] && bankSelect.value == "bankA") {
        aHatOpen.play();
      }
      else if (someMIDI.note.number == midiVal[5] && bankSelect.value == "bankB") {
        bHatOpen.play();
      }
      else if (someMIDI.note.number == midiVal[5] && bankSelect.value == "bankC") {
        cHatOpen.play();
      }
      else if (someMIDI.note.number == midiVal[5] && bankSelect.value == "bankD") {
        dHatOpen.play();
      }

      //TOM 1
      else if (someMIDI.note.number == midiVal[6] && bankSelect.value == "bankA") {
        aTom1.play();
      }
      else if (someMIDI.note.number == midiVal[6] && bankSelect.value == "bankB") {
        bTom1.play();
      }
      else if (someMIDI.note.number == midiVal[6] && bankSelect.value == "bankC") {
        cTom1.play();
      }
      else if (someMIDI.note.number == midiVal[6] && bankSelect.value == "bankD") {
        dTom1.play();
      }

      //TOM 2
      else if (someMIDI.note.number == midiVal[7] && bankSelect.value == "bankA") {
        aTom2.play();
      }
      else if (someMIDI.note.number == midiVal[7] && bankSelect.value == "bankB") {
        bTom2.play();
      }
      else if (someMIDI.note.number == midiVal[7] && bankSelect.value == "bankC") {
        cTom2.play();
      }
      else if (someMIDI.note.number == midiVal[7] && bankSelect.value == "bankD") {
        dTom2.play();
      }

      //TOM 3
      else if (someMIDI.note.number == midiVal[8] && bankSelect.value == "bankA") {
        aTom3.play();
      }
      else if (someMIDI.note.number == midiVal[8] && bankSelect.value == "bankB") {
        bTom3.play();
      }
      else if (someMIDI.note.number == midiVal[8] && bankSelect.value == "bankC") {
        cTom3.play();
      }
      else if (someMIDI.note.number == midiVal[8] && bankSelect.value == "bankD") {
        dTom3.play();
      }
    });
  
  
  
    myInput.addListener("noteoff", function (someMIDI) {
      // Similarly, when a note off event is received, send a note off message to the output device.
      // This signals the end of a note being played.
      myOutput.sendNoteOff(someMIDI.note);
    });
  });

  bankSelect.addEventListener("change", function () {
    // console.log(bankSelect.value);
    return bankSelect;
  });

  const updateGain = function() {
    // audioContext.resume()
    let sliderVal = parseFloat(gainControl.value)
    document.getElementById("gainDisplay").innerText = `${sliderVal} dBFS`
    let linAmp = 10**(sliderVal/20)
    // console.log(sliderVal, linAmp)
    gainNode.gain.setValueAtTime(linAmp, audioContext.currentTime);
    // console.log(gainNode.gain.value)
}


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

const gainControl = document.getElementById("gainSlider");

const gainNode = audioContext.createGain();
gainNode.connect(audioContext.destination);
gainNode.gain.value = 0. //linear amplitude

//link to audio files with a being BANK A and b being BANK B

// BANK A
let aKick1 = new Audio (".audio/kick.wav");
let aKick2 = new Audio (".audio/kick2.wav");
let aSnare1 = new Audio (".audio/snare.wav");
let aSnare2 = new Audio (".audio/snare2.wav");
let aHatClosed = new Audio (".audio/hh-closed.wav");
let aHatOpen = new Audio (".audio/hh-open.wav");
let aTom1 = new Audio (".audio/tom1.wav");
let aTom2 = new Audio (".audio/tom2.wav");
let aTom3 = new Audio (".audio/tom3.wav");

// BANK B
let bKick1 = new Audio (".audio/b-kick.wav");
let bKick2 = new Audio (".audio/b-kick2.wav");
let bSnare1 = new Audio (".audio/b-snare1.wav");
let bSnare2 = new Audio (".audio/b-snare2.wav");
let bHatClosed = new Audio (".audio/b-hh-closed.wav");
let bHatOpen = new Audio (".audio/b-hh-open.wav");
let bTom1 = new Audio (".audio/b-tom1.wav");
let bTom2 = new Audio (".audio/b-tom2.wav");
let bTom3 = new Audio (".audio/b-tom3.wav");

// BANK C
let cKick1 = new Audio (".audio/c-kick1.wav");
let cKick2 = new Audio (".audio/c-kick2.wav");
let cSnare1 = new Audio (".audio/c-snare1.wav");
let cSnare2 = new Audio (".audio/c-snare2.wav");
let cHatClosed = new Audio (".audio/c-hh-closed.wav");
let cHatOpen = new Audio (".audio/c-hh-open.wav");
let cTom1 = new Audio (".audio/c-tom1.wav");
let cTom2 = new Audio (".audio/c-tom2.wav");
let cTom3 = new Audio (".audio/c-tom3.wav");

// BANK D
let dKick1 = new Audio (".audio/d-kick1.wav");
let dKick2 = new Audio (".audio/d-kick2.wav");
let dSnare1 = new Audio (".audio/d-snare1.wav");
let dSnare2 = new Audio (".audio/d-snare2.wav");
let dHatClosed = new Audio (".audio/d-hh-closed.wav");
let dHatOpen = new Audio (".audio/d-hh-open.wav");
let dTom1 = new Audio (".audio/d-tom1.wav");
let dTom2 = new Audio (".audio/d-tom2.wav");
let dTom3 = new Audio (".audio/d-tom3.wav");


// creating SOURCE MEDIA from SAMPLES
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

const source19 = audioContext.createMediaElementSource(cKick1);
const source20 = audioContext.createMediaElementSource(cKick2);
const source21 = audioContext.createMediaElementSource(cSnare1);
const source22 = audioContext.createMediaElementSource(cSnare2);
const source23 = audioContext.createMediaElementSource(cHatClosed);
const source24 = audioContext.createMediaElementSource(cHatOpen);
const source25 = audioContext.createMediaElementSource(cTom1);
const source26 = audioContext.createMediaElementSource(cTom2);
const source27 = audioContext.createMediaElementSource(cTom3);

const source28 = audioContext.createMediaElementSource(dKick1);
const source29 = audioContext.createMediaElementSource(dKick2);
const source30 = audioContext.createMediaElementSource(dSnare1);
const source31 = audioContext.createMediaElementSource(dSnare2);
const source32 = audioContext.createMediaElementSource(dHatClosed);
const source33 = audioContext.createMediaElementSource(dHatOpen);
const source34 = audioContext.createMediaElementSource(dTom1);
const source35 = audioContext.createMediaElementSource(dTom2);
const source36 = audioContext.createMediaElementSource(dTom3);


// Connecting SOURCE to DESTINATION
source.connect(gainNode);
source2.connect(gainNode);
source3.connect(gainNode);
source4.connect(gainNode);
source5.connect(gainNode);
source6.connect(gainNode);
source7.connect(gainNode);
source8.connect(gainNode);
source9.connect(gainNode);

source10.connect(gainNode);
source11.connect(gainNode);
source12.connect(gainNode);
source13.connect(gainNode);
source14.connect(gainNode);
source15.connect(gainNode);
source16.connect(gainNode);
source17.connect(gainNode);
source18.connect(gainNode);

source19.connect(gainNode);
source20.connect(gainNode);
source21.connect(gainNode);
source22.connect(gainNode);
source23.connect(gainNode);
source24.connect(gainNode);
source25.connect(gainNode);
source26.connect(gainNode);
source27.connect(gainNode);

source28.connect(gainNode);
source29.connect(gainNode);
source30.connect(gainNode);
source31.connect(gainNode);
source32.connect(gainNode);
source33.connect(gainNode);
source34.connect(gainNode);
source35.connect(gainNode);
source36.connect(gainNode);

gainNode.connect(audioContext.destination);

//EVENT LISTENERS for OnScreen Buttons
playKick1.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        // console.log(audioContext);
    };
    if (bankSelect.value == "bankA") {
      aKick1.play();
    }
    else if (bankSelect.value == "bankB") {
      bKick1.play();
    }
    else if (bankSelect.value == "bankC") {
      cKick1.play();
    }
    else if (bankSelect.value == "bankD") {
      dKick1.play();
    }
});

playKick2.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        // console.log(audioContext);
    };
    if (bankSelect.value == "bankA") {
      aKick2.play();
    }
    else if (bankSelect.value == "bankB") {
      bKick2.play();
    }
    else if (bankSelect.value == "bankC") {
      cKick2.play();
    }
    else if (bankSelect.value == "bankD") {
      dKick2.play();
    }
});

playSnare1.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        // console.log(audioContext);
    };
    if (bankSelect.value == "bankA") {
      aSnare1.play();
    }
    else if (bankSelect.value == "bankB") {
      bSnare1.play();
    }
    else if (bankSelect.value == "bankC") {
      cSnare1.play();
    }
    else if (bankSelect.value == "bankD") {
      dSnare1.play();
    }
});

playSnare2.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        // console.log(audioContext);
    };
    if (bankSelect.value == "bankA") {
      aSnare2.play();
    }
    else if (bankSelect.value == "bankB") {
      bSnare2.play();
    }
    else if (bankSelect.value == "bankC") {
      cSnare2.play();
    }
    else if (bankSelect.value == "bankD") {
      dSnare2.play();
    }
});

playHatsClosed.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        // console.log(audioContext);
    };
    if (bankSelect.value == "bankA") {
      aHatClosed.play();
    }
    else if (bankSelect.value == "bankB") {
      bHatClosed.play();
    }
    else if (bankSelect.value == "bankC") {
      cHatClosed.play();
    }
    else if (bankSelect.value == "bankD") {
      cHatClosed.play();
    }
});

playHatsOpen.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        // console.log(audioContext);
    };
    if (bankSelect.value == "bankA") {
      aHatOpen.play();
    }
    else if (bankSelect.value == "bankB") {
      bHatOpen.play();
    }
    else if (bankSelect.value == "bankC") {
      cHatOpen.play();
    }
    else if (bankSelect.value == "bankD") {
      dHatOpen.play();
    }
});

playToms1.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        // console.log(audioContext);
    };
    if (bankSelect.value == "bankA") {
      aTom1.play();
    }
    else if (bankSelect.value == "bankB") {
      bTom1.play();
    }
    else if (bankSelect.value == "bankC") {
      cTom1.play();
    }
    else if (bankSelect.value == "bankD") {
      dTom1.play();
    }
});

playToms2.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        // console.log(audioContext);
    };
    if (bankSelect.value == "bankA") {
      aTom2.play();
    }
    else if (bankSelect.value == "bankB") {
      bTom2.play();
    }
    else if (bankSelect.value == "bankC") {
      cTom2.play();
    }
    else if (bankSelect.value == "bankD") {
      dTom2.play();
    }
});

playToms3.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
        // console.log(audioContext);
    };
    if (bankSelect.value == "bankA") {
      aTom3.play();
    }
    else if (bankSelect.value == "bankB") {
      bTom3.play();
    }
    else if (bankSelect.value == "bankC") {
      cTom3.play();
    }
    else if (bankSelect.value == "bankD") {
      dTom3.play();
    }
});


gainControl.addEventListener("input", updateGain)


