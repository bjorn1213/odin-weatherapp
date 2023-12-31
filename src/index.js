import "./style.css";

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

function displayWeatherInformation() {
  const divLocationInformation = document.getElementById(
    "location-information"
  );
  const divWeatherInformation = document.getElementById("weather-information");

  divLocationInformation.textContent = `Current weather for ${currentWeatherInformation.name}, ${currentWeatherInformation.country}`;
  divWeatherInformation.textContent = `${currentWeatherInformation.temp_c} C`;
}

function toggleLoadingDiv() {
  let exists = document.getElementById("loading-div-container");
  if (!exists) {
    const div = document.createElement("div");
    div.id = "loading-div-container";

    const subdiv = document.createElement("div");
    subdiv.classList.add("loading-div");

    div.append(subdiv);

    document.querySelector("body").appendChild(div);
  } else {
    exists.remove();
  }
}

function getWeatherCallback() {
  const inputLocation = document.getElementById("input-location");
  const location = inputLocation.value;

  toggleLoadingDiv();

  getWeatherInformationAtLocation(location)
    .then((weatherInformation) => {
      console.log(weatherInformation);
      currentWeatherInformation = weatherInformation;
      displayWeatherInformation();
    })
    .catch((reason) => {
      console.log(reason);
    })
    .finally(() => toggleLoadingDiv());
}

const pageContainer = document.createElement("div");
pageContainer.classList.add("page-container");

// Weather form
const weatherFormContainer = document.createElement("div");
weatherFormContainer.classList.add("form-container");

const weatherForm = document.createElement("form");
weatherForm.setAttribute("onsubmit", "return false;");

const inputLocation = document.createElement("input");
inputLocation.setAttribute("type", "text");
inputLocation.id = "input-location";
inputLocation.defaultValue = "Amsterdam";

const btnGetWeather = document.createElement("button");
btnGetWeather.textContent = "Get weather!";
btnGetWeather.addEventListener("click", getWeatherCallback);

weatherForm.append(inputLocation, btnGetWeather);
weatherFormContainer.appendChild(weatherForm);

pageContainer.append(weatherFormContainer);

// Display weather information

const weatherInformationContainer = document.createElement("div");
weatherInformationContainer.classList.add("weather-info-container");

const divLocationInformation = document.createElement("div");
divLocationInformation.classList.add("information-div");
divLocationInformation.id = "location-information";

const divWeatherInformation = document.createElement("div");
divWeatherInformation.classList.add("information-div");
divWeatherInformation.id = "weather-information";

weatherInformationContainer.append(
  divLocationInformation,
  divWeatherInformation
);
pageContainer.append(weatherInformationContainer);

document.querySelector("body").append(pageContainer);

getWeatherCallback();
