/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const API_KEY = "fd7f3bd4140e4e199de155201231806";

function getWeatherAtLocation(locationName) {
  const requestURL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${locationName}`;

  fetch(requestURL, {
    mode: "cors",
  }).then((response) => {
    console.log(response.json());
  });
}

const btn = document.createElement("button", "dummy");
btn.textContent = "TestTilburg";
btn.addEventListener("click", () => getWeatherAtLocation("Tilburg"));

document.querySelector("body").append(btn);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0Esc0VBQXNFLFFBQVEsS0FBSyxhQUFhOztBQUVoRztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBUElfS0VZID0gXCJmZDdmM2JkNDE0MGU0ZTE5OWRlMTU1MjAxMjMxODA2XCI7XG5cbmZ1bmN0aW9uIGdldFdlYXRoZXJBdExvY2F0aW9uKGxvY2F0aW9uTmFtZSkge1xuICBjb25zdCByZXF1ZXN0VVJMID0gYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtsb2NhdGlvbk5hbWV9YDtcblxuICBmZXRjaChyZXF1ZXN0VVJMLCB7XG4gICAgbW9kZTogXCJjb3JzXCIsXG4gIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKTtcbiAgfSk7XG59XG5cbmNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJkdW1teVwiKTtcbmJ0bi50ZXh0Q29udGVudCA9IFwiVGVzdFRpbGJ1cmdcIjtcbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZ2V0V2VhdGhlckF0TG9jYXRpb24oXCJUaWxidXJnXCIpKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kKGJ0bik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=