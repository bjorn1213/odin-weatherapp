/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

function getWeatherCallback() {
  const inputLocation = document.getElementById("input-location");
  const location = inputLocation.value;

  getWeatherInformationAtLocation(location)
    .then((weatherInformation) => {
      console.log(weatherInformation);
      currentWeatherInformation = weatherInformation;
      displayWeatherInformation();
    })
    .catch((reason) => {
      console.log(reason);
    });
}

// Weather form
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
document.querySelector("body").append(weatherInformationContainer);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNFQUFzRSxRQUFRLEtBQUssYUFBYTtBQUNoRzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhEQUE4RCwrQkFBK0IsSUFBSSxrQ0FBa0M7QUFDbkkseUNBQXlDLGtDQUFrQztBQUMzRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSV9LRVkgPSBcImZkN2YzYmQ0MTQwZTRlMTk5ZGUxNTUyMDEyMzE4MDZcIjtcbmxldCBjdXJyZW50V2VhdGhlckluZm9ybWF0aW9uO1xuXG5mdW5jdGlvbiBnZXRXZWF0aGVySW5mb3JtYXRpb25BdExvY2F0aW9uKGxvY2F0aW9uTmFtZSkge1xuICAvLyBnZXRzIHRoZSBjdXJyZW50IHdlYXRoZXIgaW5mb3JtYXRpb24gYW5kIHBhcnNlcyBpdCBhcyBhbiBvYmplY3Qgd2hpY2ggaXMgcmV0dXJuZWRcbiAgY29uc3QgcmVxdWVzdFVSTCA9IGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtBUElfS0VZfSZxPSR7bG9jYXRpb25OYW1lfWA7XG4gIGxldCB3ZWF0aGVySW5mb3JtYXRpb24gPSBudWxsO1xuXG4gIHJldHVybiBmZXRjaChyZXF1ZXN0VVJMLCB7XG4gICAgbW9kZTogXCJjb3JzXCIsXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICB3ZWF0aGVySW5mb3JtYXRpb24gPSB7XG4gICAgICAgIHdlYXRoZXJJbmZvcm1hdGlvbjogcmVzcG9uc2UsXG4gICAgICAgIG5hbWU6IHJlc3BvbnNlLmxvY2F0aW9uLm5hbWUsXG4gICAgICAgIGNvdW50cnk6IHJlc3BvbnNlLmxvY2F0aW9uLmNvdW50cnksXG4gICAgICAgIHRlbXBfYzogcmVzcG9uc2UuY3VycmVudC50ZW1wX2MsXG4gICAgICAgIHByZWNpcF9tbTogcmVzcG9uc2UuY3VycmVudC5wcmVjaXBfbW0sXG4gICAgICAgIGh1bWlkaXR5OiByZXNwb25zZS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgICAgICB0ZXh0OiByZXNwb25zZS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgfTtcbiAgICAgIHJldHVybiB3ZWF0aGVySW5mb3JtYXRpb247XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVySW5mb3JtYXRpb24oKSB7XG4gIGNvbnN0IGRpdkxvY2F0aW9uSW5mb3JtYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcImxvY2F0aW9uLWluZm9ybWF0aW9uXCJcbiAgKTtcbiAgY29uc3QgZGl2V2VhdGhlckluZm9ybWF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLWluZm9ybWF0aW9uXCIpO1xuXG4gIGRpdkxvY2F0aW9uSW5mb3JtYXRpb24udGV4dENvbnRlbnQgPSBgQ3VycmVudCB3ZWF0aGVyIGZvciAke2N1cnJlbnRXZWF0aGVySW5mb3JtYXRpb24ubmFtZX0sICR7Y3VycmVudFdlYXRoZXJJbmZvcm1hdGlvbi5jb3VudHJ5fWA7XG4gIGRpdldlYXRoZXJJbmZvcm1hdGlvbi50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVySW5mb3JtYXRpb24udGVtcF9jfSBDYDtcbn1cblxuZnVuY3Rpb24gZ2V0V2VhdGhlckNhbGxiYWNrKCkge1xuICBjb25zdCBpbnB1dExvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1sb2NhdGlvblwiKTtcbiAgY29uc3QgbG9jYXRpb24gPSBpbnB1dExvY2F0aW9uLnZhbHVlO1xuXG4gIGdldFdlYXRoZXJJbmZvcm1hdGlvbkF0TG9jYXRpb24obG9jYXRpb24pXG4gICAgLnRoZW4oKHdlYXRoZXJJbmZvcm1hdGlvbikgPT4ge1xuICAgICAgY29uc29sZS5sb2cod2VhdGhlckluZm9ybWF0aW9uKTtcbiAgICAgIGN1cnJlbnRXZWF0aGVySW5mb3JtYXRpb24gPSB3ZWF0aGVySW5mb3JtYXRpb247XG4gICAgICBkaXNwbGF5V2VhdGhlckluZm9ybWF0aW9uKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVhc29uKTtcbiAgICB9KTtcbn1cblxuLy8gV2VhdGhlciBmb3JtXG5jb25zdCB3ZWF0aGVyRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG53ZWF0aGVyRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG5cbmNvbnN0IHdlYXRoZXJGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG53ZWF0aGVyRm9ybS5zZXRBdHRyaWJ1dGUoXCJvbnN1Ym1pdFwiLCBcInJldHVybiBmYWxzZTtcIik7XG5cbmNvbnN0IGlucHV0TG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5pbnB1dExvY2F0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuaW5wdXRMb2NhdGlvbi5pZCA9IFwiaW5wdXQtbG9jYXRpb25cIjtcblxuY29uc3QgYnRuR2V0V2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5idG5HZXRXZWF0aGVyLnRleHRDb250ZW50ID0gXCJHZXQgd2VhdGhlciFcIjtcbmJ0bkdldFdlYXRoZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldFdlYXRoZXJDYWxsYmFjayk7XG5cbndlYXRoZXJGb3JtLmFwcGVuZChpbnB1dExvY2F0aW9uLCBidG5HZXRXZWF0aGVyKTtcbndlYXRoZXJGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJGb3JtKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kKHdlYXRoZXJGb3JtQ29udGFpbmVyKTtcblxuLy8gRGlzcGxheSB3ZWF0aGVyIGluZm9ybWF0aW9uXG5cbmNvbnN0IHdlYXRoZXJJbmZvcm1hdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG53ZWF0aGVySW5mb3JtYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItaW5mby1jb250YWluZXJcIik7XG5cbmNvbnN0IGRpdkxvY2F0aW9uSW5mb3JtYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGl2TG9jYXRpb25JbmZvcm1hdGlvbi5jbGFzc0xpc3QuYWRkKFwiaW5mb3JtYXRpb24tZGl2XCIpO1xuZGl2TG9jYXRpb25JbmZvcm1hdGlvbi5pZCA9IFwibG9jYXRpb24taW5mb3JtYXRpb25cIjtcblxuY29uc3QgZGl2V2VhdGhlckluZm9ybWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpdldlYXRoZXJJbmZvcm1hdGlvbi5jbGFzc0xpc3QuYWRkKFwiaW5mb3JtYXRpb24tZGl2XCIpO1xuZGl2V2VhdGhlckluZm9ybWF0aW9uLmlkID0gXCJ3ZWF0aGVyLWluZm9ybWF0aW9uXCI7XG5cbndlYXRoZXJJbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmQoXG4gIGRpdkxvY2F0aW9uSW5mb3JtYXRpb24sXG4gIGRpdldlYXRoZXJJbmZvcm1hdGlvblxuKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZCh3ZWF0aGVySW5mb3JtYXRpb25Db250YWluZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9