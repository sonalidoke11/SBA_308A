
Git hub link : https://github.com/sonalidoke11/SBA_308A.git

Git Site link: https://sonalidoke11.github.io/SBA_308A/

In this project, we have to give city name in search bar and hit search it will show terature in that city in °C.

Here I am using 
1) `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(cityName)}&format=json` api to fetch longitude and latitude of city

2) By passing received longitude and latitude to function sending fetch request to 'https://api.open-meteo.com/v1/forecast' API to get weather data

3) Passing received data to display function and showing temparture from received data on UI.

4) Added search feature Used fetch API

5) Used Promises and async/await syntax

6) Divided javascript code in files and used Import export
