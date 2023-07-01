/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const API_KEY = "fd7f3bd4140e4e199de155201231806";

async function getWeatherInformationAtLocation(locationName) {
  // gets the current weather information and parses it as an object which is returned
  const requestURL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${locationName}`;
  let weatherInformation = null;

  let response = await fetch(requestURL, {
    mode: "cors",
  });
  response = await response.json();

  weatherInformation = {
    weatherInformation: response,
    name: response.location.name,
    country: response.location.country,
    temp_c: response.current.temp_c,
    precip_mm: response.current.precip_mm,
    humidity: response.current.humidity,
    text: response.current.condition.text,
  };

  console.log(response);
  console.log(response.location.name);
  console.log(response.location.country);
  console.log(response.current.temp_c);
  console.log(response.current.precip_mm);
  console.log(response.current.humidity);
  console.log(response.current.condition.text);

  return weatherInformation;
}

const btn = document.createElement("button", "dummy");
btn.textContent = "TestTilburg";
btn.addEventListener("click", async () =>
  console.log(await getWeatherInformationAtLocation("Tilburg"))
);

document.querySelector("body").append(btn);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQSxzRUFBc0UsUUFBUSxLQUFLLGFBQWE7QUFDaEc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSV9LRVkgPSBcImZkN2YzYmQ0MTQwZTRlMTk5ZGUxNTUyMDEyMzE4MDZcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckluZm9ybWF0aW9uQXRMb2NhdGlvbihsb2NhdGlvbk5hbWUpIHtcbiAgLy8gZ2V0cyB0aGUgY3VycmVudCB3ZWF0aGVyIGluZm9ybWF0aW9uIGFuZCBwYXJzZXMgaXQgYXMgYW4gb2JqZWN0IHdoaWNoIGlzIHJldHVybmVkXG4gIGNvbnN0IHJlcXVlc3RVUkwgPSBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke2xvY2F0aW9uTmFtZX1gO1xuICBsZXQgd2VhdGhlckluZm9ybWF0aW9uID0gbnVsbDtcblxuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VVJMLCB7XG4gICAgbW9kZTogXCJjb3JzXCIsXG4gIH0pO1xuICByZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICB3ZWF0aGVySW5mb3JtYXRpb24gPSB7XG4gICAgd2VhdGhlckluZm9ybWF0aW9uOiByZXNwb25zZSxcbiAgICBuYW1lOiByZXNwb25zZS5sb2NhdGlvbi5uYW1lLFxuICAgIGNvdW50cnk6IHJlc3BvbnNlLmxvY2F0aW9uLmNvdW50cnksXG4gICAgdGVtcF9jOiByZXNwb25zZS5jdXJyZW50LnRlbXBfYyxcbiAgICBwcmVjaXBfbW06IHJlc3BvbnNlLmN1cnJlbnQucHJlY2lwX21tLFxuICAgIGh1bWlkaXR5OiByZXNwb25zZS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgIHRleHQ6IHJlc3BvbnNlLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gIH07XG5cbiAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICBjb25zb2xlLmxvZyhyZXNwb25zZS5sb2NhdGlvbi5uYW1lKTtcbiAgY29uc29sZS5sb2cocmVzcG9uc2UubG9jYXRpb24uY291bnRyeSk7XG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlLmN1cnJlbnQudGVtcF9jKTtcbiAgY29uc29sZS5sb2cocmVzcG9uc2UuY3VycmVudC5wcmVjaXBfbW0pO1xuICBjb25zb2xlLmxvZyhyZXNwb25zZS5jdXJyZW50Lmh1bWlkaXR5KTtcbiAgY29uc29sZS5sb2cocmVzcG9uc2UuY3VycmVudC5jb25kaXRpb24udGV4dCk7XG5cbiAgcmV0dXJuIHdlYXRoZXJJbmZvcm1hdGlvbjtcbn1cblxuY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcImR1bW15XCIpO1xuYnRuLnRleHRDb250ZW50ID0gXCJUZXN0VGlsYnVyZ1wiO1xuYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PlxuICBjb25zb2xlLmxvZyhhd2FpdCBnZXRXZWF0aGVySW5mb3JtYXRpb25BdExvY2F0aW9uKFwiVGlsYnVyZ1wiKSlcbik7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZChidG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9