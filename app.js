// injecting javascript into fetch url
const apiKey = 'e8cc385300a0fc49d9902ecb791f6030'
const unit = 'metric'
// const url = 


// couldn't inject Javascript and fetch the url 
// using a variable and i have no idea why
function searchWeather(cityName){
fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}&units=${unit}`)
.then(y => {
    return y.json()
})
.then(y =>{
    init(y)
})
.catch(function(err){
    alert('city not found, please check spelling')
})

}

// setting up elements to take data from API
function init(results){
    console.log(results)
    const weatherHeader = document.querySelector('.weather-header')
    const tempDisplay = document.querySelector('.temperature')
    const nameOfCountry =  document.querySelector('.countryName')
    const humidLevels = document.querySelector('#humidity')
    const winds = document.querySelector('#windspeed')
    const nameOfCity = document.querySelector('#name-of-city')
    const iconImg = document.getElementById('icon-img')

    //icon insert (updates based on weather)
    iconImg.src = 'http://openweathermap.org/img/wn/' + results.weather[0].icon + '.png'

    //temperature description w/ capitialized first 
    // this needed a function in order for it to work and i have no idea why
    const resultDesc = results.weather[0].description
    weatherHeader.textContent = resultDesc.charAt(0).toUpperCase() + resultDesc.slice(1)

    //temperature display
    tempDisplay.textContent = Math.floor(results.main.temp) + '°'

    // wind speeds & humidity
    winds.textContent = 'Winds @ ' +  Math.floor(results.wind.speed) + 'm/s'
    humidLevels.textContent = 'Humidity Levels @ ' + results.main.humidity + '%'

    // name of the city
    nameOfCity.textContent = results.name +  ", " + results.sys.country 

    
}


// linking the search button 
document.getElementById('button').addEventListener('click', () =>{
    const cityName = document.getElementById('input').value;
    if(cityName)
        searchWeather(cityName)

})

// enabling enter key to search
const enter = document.getElementById("button");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("button").click();
  }
});