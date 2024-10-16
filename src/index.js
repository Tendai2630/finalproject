

function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");
  
    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = formatDate(date);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    temperatureElement.innerHTML = Math.round(temperature);
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
  }
  
  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    return `${day} ${hours}:${minutes}`;
  }
  
  function searchCity(city) {
    let apiKey = "t4f81808b6o8c140994f8e9749ba33a0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}7uints=mutric`;
    axios.get(apiUrl).then(refreshWeather);
  }

  
  function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
  
    searchCity(searchInput.value);
  }
   function getforecast(city){
    let apikey="t4f81808b6o8c140994f8e9749ba33a0";
    let apiUrl="https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apikey}&units=metric";
  axios(apiUrl).then(displayForecast);
  }





  function displayForecast(response);
F
let days= ["mon" ,"tue", "wed", "thurs", "fri"]
let forecastHtml="";

days.forEach(function(day) ) ;{ 
  forecastHtml=
  forecastHtml +
""
          <div class = "weather-forecast " >
          <div class="weather-forecast-day">
          <div class="weather-forecast-date">${tue}</div>
          <div class="weather-forecast-icon">🌥️</div>
          <div class="weather-forecast-temperature"><strong>15°</strong>
               </div> 
               <div>9°</div>
</div>
';})'
;

let forecastElement=document.querySelector("#forecast");
forecastElement.innerHTML= forecastHtml;


}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");
getforecast("paris");
diplay ("#forecast");


 