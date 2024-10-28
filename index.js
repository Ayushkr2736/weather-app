const apiKey = "YOUR_API_KEY"; 

function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (city) {
    fetch(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          document.getElementById("cityName").innerText = data.name;
          document.getElementById("temperature").innerText = Temperature: ${data.main.temp}°C;
          document.getElementById("description").innerText = Weather: ${data.weather[0].description};
          document.getElementById("humidity").innerText = Humidity: ${data.main.humidity}%;
        } else {
          document.getElementById("weatherResult").innerText = "City not found. Please try again.";
        }
      })
      .catch(error => console.error("Error fetching the weather data:", error));
  } else {
    document.getElementById("weatherResult").innerText = "Please enter a city name.";
  }
}
