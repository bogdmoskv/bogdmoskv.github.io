function convertToJap(){
    const ukrTimeInput = document.getElementById('ukrTime').value;
    const [hour, minute] = ukrTimeInput.split(':');
    const ukrHour = parseInt(hour);
    const japHour = (ukrHour + 7) %24;
    const japTime = `${japHour}:${minute}`;
    document.getElementById('japTime').value = japTime;
}

function convertToUkr(){
    const japTimeInput = document.getElementById('japTime').value;
    const [hour, minute] = japTimeInput.split(':');
    const japHour = parseInt(hour);
    const ukrHour = (japHour - 7 + 24)%24;
    const ukrTime = `${ukrHour}:${minute}`;
    document.getElementById('ukrTime').value = ukrTime;
}

function clearFields(){
    document.getElementById('ukrTime').value = '';
    document.getElementById('japTime').value = '';
}