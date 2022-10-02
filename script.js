

let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";


getWeatherData = (city) => {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f8cfdd69f9msh1e51a85031d50e4p1cc4ebjsna98032e65e5f',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
  };

  return fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=c`, options)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.error(err));
}


const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  if(city == ''){
    alert("Please enter a city to be SEARCHED")
  }else{
    const data = await getWeatherData(city)
    showWeatherData(data)
  }
  
}

const showWeatherData = (weatherData) => {
  document.getElementById('temp').innerText = weatherData.forecasts[0].high
  document.getElementById('city-name').innerText = weatherData.location.city
  document.getElementById('weather-type').innerText = weatherData.forecasts[0].text
  document.getElementById('min-temp').innerText = weatherData.forecasts[0].low
  document.getElementById('max-temp').innerText = weatherData.forecasts[0].high
}



