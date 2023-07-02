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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNFQUFzRSxRQUFRLEtBQUssYUFBYTtBQUNoRzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSV9LRVkgPSBcImZkN2YzYmQ0MTQwZTRlMTk5ZGUxNTUyMDEyMzE4MDZcIjtcbmxldCBjdXJyZW50V2VhdGhlckluZm9ybWF0aW9uO1xuXG5mdW5jdGlvbiBnZXRXZWF0aGVySW5mb3JtYXRpb25BdExvY2F0aW9uKGxvY2F0aW9uTmFtZSkge1xuICAvLyBnZXRzIHRoZSBjdXJyZW50IHdlYXRoZXIgaW5mb3JtYXRpb24gYW5kIHBhcnNlcyBpdCBhcyBhbiBvYmplY3Qgd2hpY2ggaXMgcmV0dXJuZWRcbiAgY29uc3QgcmVxdWVzdFVSTCA9IGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtBUElfS0VZfSZxPSR7bG9jYXRpb25OYW1lfWA7XG4gIGxldCB3ZWF0aGVySW5mb3JtYXRpb24gPSBudWxsO1xuXG4gIHJldHVybiBmZXRjaChyZXF1ZXN0VVJMLCB7XG4gICAgbW9kZTogXCJjb3JzXCIsXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICB3ZWF0aGVySW5mb3JtYXRpb24gPSB7XG4gICAgICAgIHdlYXRoZXJJbmZvcm1hdGlvbjogcmVzcG9uc2UsXG4gICAgICAgIG5hbWU6IHJlc3BvbnNlLmxvY2F0aW9uLm5hbWUsXG4gICAgICAgIGNvdW50cnk6IHJlc3BvbnNlLmxvY2F0aW9uLmNvdW50cnksXG4gICAgICAgIHRlbXBfYzogcmVzcG9uc2UuY3VycmVudC50ZW1wX2MsXG4gICAgICAgIHByZWNpcF9tbTogcmVzcG9uc2UuY3VycmVudC5wcmVjaXBfbW0sXG4gICAgICAgIGh1bWlkaXR5OiByZXNwb25zZS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgICAgICB0ZXh0OiByZXNwb25zZS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgfTtcbiAgICAgIHJldHVybiB3ZWF0aGVySW5mb3JtYXRpb247XG4gICAgfSk7XG59XG5cbmNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJkdW1teVwiKTtcbmJ0bi50ZXh0Q29udGVudCA9IFwiVGVzdFRpbGJ1cmdcIjtcbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgZ2V0V2VhdGhlckluZm9ybWF0aW9uQXRMb2NhdGlvbihcIlRpbGJ1cmdcIilcbiAgICAudGhlbigod2VhdGhlckluZm9ybWF0aW9uKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh3ZWF0aGVySW5mb3JtYXRpb24pO1xuICAgICAgY3VycmVudFdlYXRoZXJJbmZvcm1hdGlvbiA9IHdlYXRoZXJJbmZvcm1hdGlvbjtcbiAgICB9KVxuICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZWFzb24pO1xuICAgIH0pXG4pO1xuXG5mdW5jdGlvbiBnZXRXZWF0aGVyQ2FsbGJhY2soKSB7XG4gIGNvbnN0IGlucHV0TG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWxvY2F0aW9uXCIpO1xuICBjb25zdCBsb2NhdGlvbiA9IGlucHV0TG9jYXRpb24udmFsdWU7XG5cbiAgZ2V0V2VhdGhlckluZm9ybWF0aW9uQXRMb2NhdGlvbihsb2NhdGlvbilcbiAgICAudGhlbigod2VhdGhlckluZm9ybWF0aW9uKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh3ZWF0aGVySW5mb3JtYXRpb24pO1xuICAgICAgY3VycmVudFdlYXRoZXJJbmZvcm1hdGlvbiA9IHdlYXRoZXJJbmZvcm1hdGlvbjtcbiAgICB9KVxuICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZWFzb24pO1xuICAgIH0pO1xufVxuXG4vLyBET00gc3R1ZmZcbmNvbnN0IHdlYXRoZXJGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbndlYXRoZXJGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcblxuY29uc3Qgd2VhdGhlckZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbndlYXRoZXJGb3JtLnNldEF0dHJpYnV0ZShcIm9uc3VibWl0XCIsIFwicmV0dXJuIGZhbHNlO1wiKTtcblxuY29uc3QgaW5wdXRMb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmlucHV0TG9jYXRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5pbnB1dExvY2F0aW9uLmlkID0gXCJpbnB1dC1sb2NhdGlvblwiO1xuXG5jb25zdCBidG5HZXRXZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmJ0bkdldFdlYXRoZXIudGV4dENvbnRlbnQgPSBcIkdldCB3ZWF0aGVyIVwiO1xuYnRuR2V0V2VhdGhlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0V2VhdGhlckNhbGxiYWNrKTtcblxud2VhdGhlckZvcm0uYXBwZW5kKGlucHV0TG9jYXRpb24sIGJ0bkdldFdlYXRoZXIpO1xud2VhdGhlckZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckZvcm0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmQod2VhdGhlckZvcm1Db250YWluZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9