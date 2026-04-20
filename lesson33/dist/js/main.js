const weatherForm = document.querySelector("#weatherForm");
const city = weatherForm.querySelector('input[name="city"]');
const btn = weatherForm.querySelector('button[name="submit-button"]');
const weatherContainer = document.querySelector("#weather-data");

const API_KEY = "8967388ef15aab5dc6624ae602ea61c9";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const cityValue = city.value.trim();

  if (!cityValue) {
    alert("Enter city name");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}&units=metric&lang=ua`,
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "City not found");
    }

    renderWeather(data);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
});

function renderWeather(data) {
  weatherContainer.classList.remove("hidden");

  console.log(data);

  weatherContainer.querySelector("#weather-city").innerText = data.name;

  weatherContainer.querySelector("#weather-description").innerText =
    data.weather[0].description;

  weatherContainer.querySelector("#weather-temperature").innerText =
    `Температура: ${Math.round(data.main.temp)}°C`;

  weatherContainer.querySelector("#weather-feels-like").innerText =
    `Відчувається як: ${Math.round(data.main.feels_like)}°C`;

  weatherContainer.querySelector("#weather-humidity").innerText =
    `Вологість: ${data.main.humidity}%`;

  weatherContainer.querySelector("#weather-wind").innerText =
    `Вітер: ${data.wind.speed} м/с`;

  weatherContainer
    .querySelector("#weather-icon")
    .setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    );

  weatherContainer
    .querySelector("#weather-icon")
    .setAttribute("alt", data.weather[0].description);
}
