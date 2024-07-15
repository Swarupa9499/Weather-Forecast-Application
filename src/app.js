const apiKey = '07c4b2481481c33d7dd83566aaf80fb9';

document.getElementById('searchButton').addEventListener('click', () => {
  const cityName = document.getElementById('cityName').value;
  if (cityName) {
    fetchWeatherData(cityName);
  } else {
    alert('Please enter a city name');
  }
});

document.getElementById('currentLocationButton').addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      fetchWeatherData(null, latitude, longitude);
    }, () => {
      alert('Unable to retrieve your location');
    });
  } else {
    alert('Geolocation is not supported by this browser.');
  }
});

function fetchWeatherData(city, lat = null, lon = null) {
  let url;
  if (city) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  }

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayWeatherData(data);
      fetchForecastData(city, lat, lon);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      alert('Error fetching weather data. Please try again.');
    });
}

function fetchForecastData(city, lat, lon) {
  let url;
  if (city) {
    url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  } else {
    url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  }

  fetch(url)
    .then(response => response.json())
    .then(data => displayForecastData(data))
    .catch(error => console.error('Error fetching forecast data:', error));
}

function displayWeatherData(data) {
  const weatherDataDiv = document.getElementById('weatherData');
  weatherDataDiv.innerHTML = `
    <h2 class="text-2xl font-bold mb-2">${data.name} (${new Date().toLocaleDateString()})</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Wind: ${data.wind.speed} m/s</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Condition: ${data.weather[0].description}</p>
  `;
}

function displayForecastData(data) {
  const forecastDiv = document.getElementById('forecast');
  forecastDiv.innerHTML = '<h2 class="text-2xl font-bold mb-2">5-Day Forecast</h2>';
  data.list.forEach(item => {
    if (item.dt_txt.includes('12:00:00')) {
      forecastDiv.innerHTML += `
        <div class="mb-4">
          <h3 class="font-bold">${new Date(item.dt_txt).toLocaleDateString()}</h3>
          <p>Temp: ${item.main.temp}°C</p>
          <p>Wind: ${item.wind.speed} m/s</p>
          <p>Humidity: ${item.main.humidity}%</p>
          <p>Condition: ${item.weather[0].description}</p>
        </div>
      `;
    }
  });
}
