/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const API_KEY = "fd7f3bd4140e4e199de155201231806";

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
btn.addEventListener("click", async () =>
  getWeatherInformationAtLocation("Tilburg").then((weatherInformation) =>
    console.log(weatherInformation)
  )
);

document.querySelector("body").append(btn);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQSxzRUFBc0UsUUFBUSxLQUFLLGFBQWE7QUFDaEc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVBJX0tFWSA9IFwiZmQ3ZjNiZDQxNDBlNGUxOTlkZTE1NTIwMTIzMTgwNlwiO1xuXG5mdW5jdGlvbiBnZXRXZWF0aGVySW5mb3JtYXRpb25BdExvY2F0aW9uKGxvY2F0aW9uTmFtZSkge1xuICAvLyBnZXRzIHRoZSBjdXJyZW50IHdlYXRoZXIgaW5mb3JtYXRpb24gYW5kIHBhcnNlcyBpdCBhcyBhbiBvYmplY3Qgd2hpY2ggaXMgcmV0dXJuZWRcbiAgY29uc3QgcmVxdWVzdFVSTCA9IGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtBUElfS0VZfSZxPSR7bG9jYXRpb25OYW1lfWA7XG4gIGxldCB3ZWF0aGVySW5mb3JtYXRpb24gPSBudWxsO1xuXG4gIHJldHVybiBmZXRjaChyZXF1ZXN0VVJMLCB7XG4gICAgbW9kZTogXCJjb3JzXCIsXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICB3ZWF0aGVySW5mb3JtYXRpb24gPSB7XG4gICAgICAgIHdlYXRoZXJJbmZvcm1hdGlvbjogcmVzcG9uc2UsXG4gICAgICAgIG5hbWU6IHJlc3BvbnNlLmxvY2F0aW9uLm5hbWUsXG4gICAgICAgIGNvdW50cnk6IHJlc3BvbnNlLmxvY2F0aW9uLmNvdW50cnksXG4gICAgICAgIHRlbXBfYzogcmVzcG9uc2UuY3VycmVudC50ZW1wX2MsXG4gICAgICAgIHByZWNpcF9tbTogcmVzcG9uc2UuY3VycmVudC5wcmVjaXBfbW0sXG4gICAgICAgIGh1bWlkaXR5OiByZXNwb25zZS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgICAgICB0ZXh0OiByZXNwb25zZS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgfTtcbiAgICAgIHJldHVybiB3ZWF0aGVySW5mb3JtYXRpb247XG4gICAgfSk7XG59XG5cbmNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJkdW1teVwiKTtcbmJ0bi50ZXh0Q29udGVudCA9IFwiVGVzdFRpbGJ1cmdcIjtcbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT5cbiAgZ2V0V2VhdGhlckluZm9ybWF0aW9uQXRMb2NhdGlvbihcIlRpbGJ1cmdcIikudGhlbigod2VhdGhlckluZm9ybWF0aW9uKSA9PlxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJJbmZvcm1hdGlvbilcbiAgKVxuKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kKGJ0bik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=