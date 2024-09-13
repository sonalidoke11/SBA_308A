export async function displayWeather(data) {
    //console.log(data)

    const weatherResult = document.getElementById('weather-result');
    const data1 = await data;

    //console.log(data1);
   
    if(data1 !== null)
    {
        const temperature = data1.current_weather.temperature;
        const temperature1 = (`<p>Temperature: ${temperature}°C</p>`);
        weatherResult.innerHTML = `<h2>Temperature</h2>${temperature1}`;
    }else{
        weatherResult.innerHTML = '<p>No weather data available.</p>';
    }

}