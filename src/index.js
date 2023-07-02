const API_KEY = "fd7f3bd4140e4e199de155201231806";
let currentWeatherInformation;

function getWeatherInformationAtLocation(locationName) {
  // gets the current weather information and parses it as an object which is returned
  const requestURL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${locationName}`;
  let weatherInformation = null;

  return fetch(requestURL, {
    mode: "cors",
  })
    .then((response) => response.json())
    .then((response) => {
      weatherInformation = {
        weatherInformation: response,
        name: response.location.name,
        country: response.location.country,
        temp_c: response.current.temp_c,
        precip_mm: response.current.precip_mm,
        humidity: response.current.humidity,
        text: response.current.condition.text,
      };
      return weatherInformation;
    });
}

const btn = document.createElement("button", "dummy");
btn.textContent = "TestTilburg";
btn.addEventListener("click", () =>
  getWeatherInformationAtLocation("Tilburg")
    .then((weatherInformation) => {
      console.log(weatherInformation);
      currentWeatherInformation = weatherInformation;
    })
    .catch((reason) => {
      console.log(reason);
    })
);

function getWeatherCallback() {
  const inputLocation = document.getElementById("input-location");
  const location = inputLocation.value;

  getWeatherInformationAtLocation(location)
    .then((weatherInformation) => {
      console.log(weatherInformation);
      currentWeatherInformation = weatherInformation;
    })
    .catch((reason) => {
      console.log(reason);
    });
}

// DOM stuff
const weatherFormContainer = document.createElement("div");
weatherFormContainer.classList.add("form-container");

const weatherForm = document.createElement("form");
weatherForm.setAttribute("onsubmit", "return false;");

const inputLocation = document.createElement("input");
inputLocation.setAttribute("type", "text");
inputLocation.id = "input-location";

const btnGetWeather = document.createElement("button");
btnGetWeather.textContent = "Get weather!";
btnGetWeather.addEventListener("click", getWeatherCallback);

weatherForm.append(inputLocation, btnGetWeather);
weatherFormContainer.appendChild(weatherForm);

document.querySelector("body").append(weatherFormContainer);
