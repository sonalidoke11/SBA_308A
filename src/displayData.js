export async function displayWeather(data) {
    //console.log(data)
    const weatherResult = document.getElementById('weather-result');
    const data1 = await data;
    console.log(data1);
    const temperature = data.current_weather.temperature;
    console.log(temperature);
    
    
    if (data && data.hourly && data.hourly.temperature_2m) {
        const temperatures = data.hourly.temperature_2m.map(temp => `<p>Temperature: ${temp}°C</p>`).join('');
        weatherResult.innerHTML = `<h2>Weather Data</h2>${temperatures}`;
    } else {
        weatherResult.innerHTML = '<p>No weather data available.</p>';
    }
}