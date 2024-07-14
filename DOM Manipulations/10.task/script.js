function getVolume(event) {
    event.preventDefault();
    let radius = document.querySelector('input[name=rad]').value;
    let volume = Math.pow(Number(radius), 3)*Math.PI*4/3

    console.log(radius);
    let volumeField = document.querySelector('input[name=vol]');
    volumeField.value = volume.toFixed(2);
    console.log(volume);
    
}