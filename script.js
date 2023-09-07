// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to update the result
function updateResult() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitResult = document.getElementById('fahrenheit');

    const celsiusValue = parseFloat(celsiusInput.value);

    if (!isNaN(celsiusValue)) {
        const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
        fahrenheitResult.textContent = fahrenheitValue.toFixed(2) + " °F";
    } else {
        fahrenheitResult.textContent = "-";
    }
}

// Add event listener to the Convert button
const convertButton = document.getElementById('convertBtn');
convertButton.addEventListener('click', updateResult);
