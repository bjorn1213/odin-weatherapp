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
