import "./scss/style.scss";
import weatherIcon from "./img/premium_vector.jpg";

console.log("Webpack project is working");

const icon = document.getElementById("weather-icon");

if (icon) {
  icon.src = weatherIcon;
}

const weatherForm = document.getElementById("weatherForm");

if (weatherForm) {
  weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form works");
  });
}
