//create buttons
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










function initDevices(midi) {
    // Reset.
    midiIn = [];
    midiOut = [];
    
    // MIDI devices that send you data.
    const inputs = midi.inputs.values();
    for (let input = inputs.next(); input && !input.done; input = inputs.next()) {
      midiIn.push(input.value);
    }
    
    // MIDI devices that you send data to.
    const outputs = midi.outputs.values();
    for (let output = outputs.next(); output && !output.done; output = outputs.next()) {
      midiOut.push(output.value);
    }
    
    displayDevices();
    startListening();
  }
  
  
  // Start listening to MIDI messages.
  function startListening() {
    for (const input of midiIn) {
      input.addEventListener('midimessage', midiMessageReceived);
    }
  }





