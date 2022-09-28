
function getWeather(location) {
    var requestGeo =
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=8f2328e26bee51ece2b6b9ae8f394dfc`;
  
  fetch(requestGeo)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
  
      var lat = data[0]?.lat
  
      var lon = data[0]?.lon
  
      var requestUrl =
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=8f2328e26bee51ece2b6b9ae8f394dfc`;
  
      fetch(requestUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          displayForecast(data)
        });
    });
}


$(document).ready(function () {
  $("#btn").click(function () {
    console.log("click");
    var cityInput = $("#city").val();
    getWeather(cityInput);
  });
});

function displayForecast(response) {
    console.log("weather", response);
    $("#city-temp").text("Temp: " + response.list[0].main.temp)
//display temp
//display city name
//wind speed
//humidity
}

//function fiveDay(response) {
    //display the five forecast cards
//}

//$("#forecast").text("Today's weather")



//var forecastEl = $("#forecast")

//forecastEl.innerHTML = "weather"



