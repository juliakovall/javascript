import "./scss/style.scss";
import "./style/extra.css";
import "./style/theme.less";
import "./app.ts";
import weatherIcon from "./img/premium_vector.jpg";

const API_KEY = "8967388ef15aab5dc6624ae602ea61c9";

const form = document.getElementById("weatherForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = e.target.city.value.trim();

  if (!city) {
    alert("Enter city");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  document.getElementById("weather-city").textContent = data.name;
  document.getElementById("weather-temperature").textContent =
    "Temp: " + Math.round(data.main.temp) + "°C";
  document.getElementById("weather-feels-like").textContent =
    "Feels like: " + Math.round(data.main.feels_like) + "°C";
  document.getElementById("weather-humidity").textContent =
    "Humidity: " + data.main.humidity + "%";
  document.getElementById("weather-wind").textContent =
    "Wind: " + data.wind.speed + " m/s";
  document.getElementById("weather-description").textContent =
    data.weather[0].description;

  const icon = document.getElementById("weather-icon");
  icon.src = weatherIcon;

  document.getElementById("weather-data").classList.remove("hidden");
});
