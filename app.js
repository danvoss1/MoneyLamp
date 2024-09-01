document.addEventListener('DOMContentLoaded', function() {
    const lamp = document.getElementById('lamp');
    const soundOn = document.getElementById('soundOn');
    const soundOff = document.getElementById('soundOff');
    let isLampOn = false;

    lamp.addEventListener('click', function() {
        if (isLampOn) {
            lamp.src = 'Lamp_Off.jpg';
            soundOff.play();  // Play the lamp off sound
        } else {
            lamp.src = 'Lamp_On.jpg';
            soundOn.play();  // Play the lamp on sound
        }
        isLampOn = !isLampOn;
    });
});
