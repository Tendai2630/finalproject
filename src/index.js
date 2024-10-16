function refreshweather(response){
    let temperatureElement =document.querySelector("#temperature");
    let temperature =response.data.temperature.current;
    let cityElement= document.querySelector("#city")
   
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = math.round(temperature);

}
function searchcity(city){
    let apikey= "t4f81808b6o8c140994f8e9749ba33a0";
     let apiUrl="https://api.shecodes.io/weather/v1/current?query=${city}&key=${api}&unts=metric"; 
    axios.get(apiUrl).then(refreshweather);
}



function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput= document.querySelector("#search-form-input");
    searchCity(searchInput.value);

}


let seachformElement=document.querySelector("#search-form");
seachformElement.addEventListener("submit",handleSearchSubmit);

searchCity("PARIS");