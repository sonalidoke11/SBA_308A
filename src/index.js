
document.getElementById('search').addEventListener('click', async () => {

    const cityName = document.getElementById('location').value.trim();
    console.log('City Name:', cityName);


    async function getLatLonFromCity(cityName) {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(cityName)}&format=json`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        // console.log(data);
        // console.log(data[0].lat);
        // console.log(data[0].lon);        
        
        if (data.length > 0) {
            const location = data[0];
            return {
                latitude: location.lat,
                longitude: location.lon
            };
        } else {
            throw new Error('Geocoding failed: No results found');
        }
    }

    if (cityName) {
        try {
            const { latitude, longitude } = await getLatLonFromCity(cityName);
            console.log('Latitude:', latitude);
            console.log('Longitude:', longitude);

        } catch (error) {
            console.error('Error getting latitude and longitude:', error);
        }
    } else {
        alert('Please enter a city name.');
    }

});