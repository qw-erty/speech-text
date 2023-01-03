const { Leopard, LeopardActivationLimitReached } = require("@picovoice/leopard-node");


function fileDemo() {
  let audioPath = "hi.wav";
  let accessKey = "KBkOL5PZ2dRgHcUDmHz+X1EK8tucUGtSnqlq9Ha210xSPwRLQ76qZQ==";

  let engineInstance = new Leopard(accessKey);

  try {
    const res = engineInstance.processFile(audioPath);
    console.log("transcript: ",res.transcript);
    
  } catch (err) {
    if (err instanceof LeopardActivationLimitReached) {
      console.error(`AccessKey '${accessKey}' has reached it's processing limit.`);
    } else {
      console.error(err);
    }
  }

  engineInstance.release();
}

fileDemo();








// automatically pick platform
// const say = require('say')
 
// or, override the platform
// const Say = require('say').Say
// const say = new Say('darwin' || 'win32' || 'linux')
 
// Use default system voice and speed
// say.speak('Hello!')
 
// Stop the text currently being spoken
// say.stop()
        
// More complex example (with an OS X voice) and slow speed
// say.speak("What's up, dog?", 'Alex', 0.5)
 
// Fire a callback once the text has completed being spoken
// say.speak("What's up, dog?", 'Good News', 1.0, (err) => {
//   if (err) {
//     return console.error(err)
//   }
 
//   console.log('Text has been spoken.')
// });
 
// Export spoken audio to a WAV file
// say.export("I'm sorry, Dave.", 'Cellos', 0.75, 'hal.wav', (err) => {
//   if (err) {
//     return console.error(err)
//   }
 
//   console.log('Text has been saved to hal.wav.')
// })














// const Cheetah = require("@picovoice/cheetah-node");

// const accessKey = "KBkOL5PZ2dRgHcUDmHz+X1EK8tucUGtSnqlq9Ha210xSPwRLQ76qZQ==";
// const cheetah = new Cheetah(accessKey);

// function getNextAudioFrame() {
//     // ...
//     return audioFrame;
//   }
  
  
//   while (true) {
//     const audioFrame = getNextAudioFrame();
//     const [partialTranscript, isEndpoint] = cheetah.process(audioFrame);
//     if (isEndpoint) {
//       finalTranscript = cheetah.flush()
//     }
//   }
//   cheetah.release()






// const Leopard = require("@picovoice/leopard-node");

// const accessKey = "KBkOL5PZ2dRgHcUDmHz+X1EK8tucUGtSnqlq9Ha210xSPwRLQ76qZQ==" // Obtained from the Picovoice Console (https://console.picovoice.ai/)
// const handle = new Leopard(accessKey);

// const result = engineInstance.processFile('hi.wav');
// console.log(result.transcript);










// const Accessibility = require('accessibility');

// var labels = {
//     resetTitle: 'reset (in my language)',
//     closeTitle: 'close (in my language)',
//     menuTitle: 'title (in my language)',
//     increaseText: 'increase text size (in my language)',
//     decreaseText: 'decrease text size (in my language)',
//     increaseTextSpacing: 'increase text spacing (in my language)',
//     decreaseTextSpacing: 'decrease text spacing (in my language)',
//     increaseLineHeight: 'increase line height (in my language)',
//     decreaseLineHeight: 'decrease line height (in my language)',
//     invertColors: 'invert colors (in my language)',
//     grayHues: 'gray hues (in my language)',
//     underlineLinks: 'underline links (in my language)',
//     bigCursor: 'big cursor (in my language)',
//     readingGuide: 'reading guide (in my language)',
//     textToSpeech: 'text to speech (in my language)',
//     speechToText: 'speech to text (in my language)',
//     disableAnimations: 'disable animations (in my language)'
// };
// var options = { labels: labels };
// options.textToSpeechLang = 'en-US'; // or any other language
// options.speechToTextLang = 'en-US'; // or any other language
// new Accessibility(options);