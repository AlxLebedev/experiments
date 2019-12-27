const button = document.getElementById('btn');

button.addEventListener('click', function() {
    console.log(this);
});
console.log(this);

let currentChar = 'j';

document.addEventListener('keydown', function(event) {
    //console.log(event);
    //console.log(KeyboardEvent);
    
    if (event.keyCode === 16) {
        return;
    }

    console.log(event.key, event.charCode, event.keyCode);

    if (event.key == currentChar || event.key == currentChar.toUpperCase()) {
        console.log(`ok - ${event.key} = ${currentChar}`)
    } else {
        console.log(`wrong`)
    }
})