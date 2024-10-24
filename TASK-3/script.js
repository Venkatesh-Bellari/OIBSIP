document.getElementById('convertBtn').addEventListener('click', function () {
    const tempInput = parseFloat(document.getElementById('temperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let convertedTemp;

    if (isNaN(tempInput)) {
        alert('Please enter a valid number!');
        return;
    }
    let tempInCelsius;
    switch (inputUnit) {
        case 'Celsius':
            tempInCelsius = tempInput; 
            break;
        case 'Fahrenheit':
            tempInCelsius = (tempInput - 32) * 5 / 9; 
            break;
        case 'Kelvin':
            tempInCelsius = tempInput - 273.15; 
            break;
    }
    switch (outputUnit) {
        case 'Celsius':
            convertedTemp = tempInCelsius;
            break;
        case 'Fahrenheit':
            convertedTemp = (tempInCelsius * 9 / 5) + 32;
            break;
        case 'Kelvin':
            convertedTemp = tempInCelsius + 273.15;
            break;
    }
    document.getElementById('result').innerHTML = `
        <p>${tempInput} ${inputUnit} =</p>
        <p>${convertedTemp.toFixed(2)} ${outputUnit}</p>
    `;
});
