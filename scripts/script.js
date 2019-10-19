//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Diagnostics = require('Diagnostics');
const FaceTracking = require('FaceTracking');


// Load in the patches module
const Patches = require('Patches');

// Create a boolean variable
var count2 = 0;
const Scene = require('Scene');

const scoreText = Scene.root.find('textUpdate')


// Get the 'myText' string from the Patch Editor
const myString = Patches.getScalarValue('myText');


//var mytext3;
// Send the boolean to the Patch Editor under the name 'myBoolean'

FaceTracking.face(0).mouth.openness.monitor().subscribe(function(event) {
    if(event.newValue > 0.5) {
        count2++;
        Diagnostics.log('NeoPet VR is ready '+count2);
        Patches.setScalarValue('mouthOpenCounter', count2);
    }
    else if(event.newValue < 0.3) {

        count2 = 0;
    }

    scoreText.text = myString.toString();
    //mytext3 = "sdsd";
    //Patches.setStringValue('myText2', mytext3);
  });

  ////
// How to access scene objects (uncomment line below to activate)
// const directionalLight = Scene.root.find('directionalLight0');

// How to access class properties (uncomment line below to activate)
// const directionalLightIntensity = directionalLight.intensity;

// How to log messages to the console (uncomment line below to activate)
// Diagnostics.log('Console message logged from the script.');
