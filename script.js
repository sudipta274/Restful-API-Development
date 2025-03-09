function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '3cd8e5cbf5d0f92224a7a0b849440c5c';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = `
                <p><strong>City:</strong> ${data.name}</p>
                <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            `;
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        alert('Error fetching weather data. Please try again later.');
    }
}
