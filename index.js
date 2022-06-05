function search(city) {
  let apiKey = "4d0850e5170aa01c3c0597d0577f945a";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#new-city-input").value;
  search(city);
}

function showTemperature(response) {
  document.querySelector("#searched-city").innerHTML = response.data.name;
  document.querySelector(".current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(".humidity").innerHTML = response.data.main.humidity;
  document.querySelector(".wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("h3#weather-description").innerHTML =
    response.data.weather[0].description;
}

function showCurrentCity(position) {
  let apiKey = "4d0850e5170aa01c3c0597d0577f945a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function startCurrentCity(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentCity);
}

let currentCityButton = document.querySelector("button#current-city-button");
currentCityButton.addEventListener("click", startCurrentCity);

let searchButton = document.querySelector("button#search-button");
searchButton.addEventListener("click", handleSubmit);

search("New York");
