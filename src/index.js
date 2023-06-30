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
