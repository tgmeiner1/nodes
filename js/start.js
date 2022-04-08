// runs when user clicks button
AFRAME.registerComponent('start', {

  init: function()
  {
    // block pointer events until buttonEnter is clicked
    let uiDiv = document.getElementById("uiDiv");
    uiDiv.style["pointer-events"] = "auto";

    // set up background blocker
    uiDiv.style["background-color"] = "rgba(0, 0, 0, 0.75)";

    // indicate clickable with hand cursor (desktop)
    let buttonEnter = document.getElementById("buttonEnter");
    buttonEnter.style.cursor = "pointer";

    // Create an AudioContext
    // let audioContext = new AudioContext();

    // Create a (first-order Ambisonic) Resonance Audio scene and pass it
    // the AudioContext.
    // let resonanceAudioScene = new ResonanceAudio(audioContext);

    // Connect the scene’s binaural output to stereo out.
    // resonanceAudioScene.output.connect(audioContext.destination);

    // Define room dimensions.
    // By default, room dimensions are undefined (0m x 0m x 0m).
    // let roomDimensions = {
    // 	width: 4,
    // 	height: 4,
    // 	depth: 4,
    // };

    // Define materials for each of the room’s six surfaces.
    // Room materials have different acoustic reflectivity.
    //https://resonance-audio.github.io/resonance-audio/reference/web/Utils.html#.ROOM_MATERIAL_COEFFICIENTS
    // let roomMaterials = {
    // 	// Room wall materials
    // 	left: 'brick-bare',
    // 	right: 'brick-bare',
    // 	front: 'brick-bare',
    // 	back: 'brick-bare',
    // 	// Room floor
    // 	down: 'brick-bare',
    // 	// Room ceiling
    // 	up: 'brick-bare',
    // };

    // Add the room definition to the scene.
    // resonanceAudioScene.setRoomProperties(roomDimensions, roomMaterials);

    // fade-in functionality
    let fadeIn = function()
    {
      // allow point events again
      uiDiv.style["pointer-events"] = "none";

      // // Create an AudioElement.
      // let audioElement = document.createElement('audio');
      //
      // // Load an audio file into the AudioElement.
      // audioElement.src = 'audio/ambient-wind.mp3';
      //
      // // Generate a MediaElementSource from the AudioElement.
      // let audioElementSource = audioContext.createMediaElementSource(audioElement);
      //
      // // Add the MediaElementSource to the scene as an audio input source.
      // let source = resonanceAudioScene.createSource();
      // audioElementSource.connect(source.input);

      // Set the source position relative to the room center (source default position).
      // source.setPosition(-0.707, -0.707, 0);

      // Play the audio.
      // audioElement.play();

      // // sounds can only be triggered after a mouse interaction
      // let soundPlayer = document.querySelector("#ambientSound");
      // soundPlayer.components.sound.playSound();

      document.getElementById('my-src').play();

      // remove startButton
      buttonEnter.parentNode.remove(buttonEnter);

      // fade out uiDiv background
      uiDiv.style["background-color"] = "rgba(0, 0, 0, 0.0)";
        uiDiv.style["transition"] = "background-color 1000ms linear";
    }

    // activate for desktop/touchscreen
    buttonEnter.addEventListener('touchstart', fadeIn);
    buttonEnter.addEventListener('mousedown',  fadeIn);
  }
});
