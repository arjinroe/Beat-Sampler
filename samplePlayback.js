//create audio context
const superAudioContext = new (AudioContext || webkit.AudioContext)();

// create AUDIO NODES
const source = superAudioContext.createBufferSource();
const myGain = superAudioContext.createGain();
const myFilter = superAudioContext.createBiquadFilter();


//connect AUDIO NODES
source.connect(myFilter);
myFilter.connect(myGain);
myGain.connect(superAudioContext.destination);

//initial values
myGain.gain.value = 1.0;
myFilter.type = "peaking"; //filter type
myFilter.frequency.setValueAtTime(1000, superAudioContext.currentTime); //cutoff freq
myFilter.Q.setValueAtTime(10, superAudioContext.currentTime);
myFilter.gain.setValueAtTime(25, superAudioContext.currentTime);


//let's import the sample...
    //but there's a problem, these audio files are LARGE and take time to load...
    //so we'll build functions that use the AWAIT tag...

//get raw data from audio file...
const getAudioFile = async function(url) { //make an async function if you want it to start before anything else happens...
    const response = await fetch(url); //fetch grabs the file...
    const arrayBuffer = await response.arrayBuffer(); //arrayBuffer grabs the binary code...
    return arrayBuffer;
};

//decode raw data into audio data...
const decodeAudioData = async function(audioContext, dataBuffer){
    //decoding raw data into audio data.
    const audioBuffer = await audioContext.decodeAudioData(dataBuffer);
    return audioBuffer;
};

//load into buffer and play...
const playAudio = function (audioContext, audioBuff){
    //create a BufferSource node...
    source.buffer = audioBuff;
    source.start();
};
//now let's call these functions...
const fileData = await getAudioFile("./kick.wav");
const fileData2 = await getAudioFile("./snare.wav");

const mySpecialBuffer = await decodeAudioData(superAudioContext, fileData);
console.log(mySpecialBuffer);
const mySpecialBuffer2 = await decodeAudioData(superAudioContext, fileData2);
console.log(mySpecialBuffer2);

mySpecialBuffer.getChannelData(0).forEach(function (s) {
    s*2;
});

document.getElementById("play").addEventListener("click", function () {
    superAudioContext.resume();
    playAudio(superAudioContext, mySpecialBuffer);
});

document.getElementById("play2").addEventListener("click", function () {
    superAudioContext.resume();
    playAudio(superAudioContext, mySpecialBuffer2);
});

//note: the following stops the audiocontext permanently
    //if you want to not do this, then you'll want to make a
    //gain node and simply turn that down
document.getElementById("stop").addEventListener("click", function () {
    source.stop();
});



