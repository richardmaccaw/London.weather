const heroDiv = document.querySelector(".hero")
const weatherDiv = document.createElement('h1')
heroDiv.appendChild(weatherDiv)


const getWeather = async () => {
  // get weather api response
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&lat=51&lon=-0.13&&APPID=0929cfdb09431c5749641254e1e34af9`)
  let data = await response.json()
  
  // show the weather response
  let weatherContent = document.createTextNode(data.weather[0].main)
  weatherDiv.appendChild(weatherContent)

  //show the right weather background
  const getImage = function () {
    
    let background = document.querySelector('.background')
    if (data.weather[0].main == "Clear") {
      background.style.backgroundImage = "url(img/sun_icon.png)"
      background.style.backgroundColor = '#F8E71C'
    } else if (data.weather[0].main == "Rain") {
      background.style.backgroundImage = "url(img/rain_icon.png)"
      background.style.backgroundColor = '#4A90E2'
    } else if (data.weather[0].main == "Clouds") {
      background.style.backgroundImage = "url(img/cloud_icon.png)"
      background.style.backgroundColor = '#676767'
    } else if (data.weather[0].main == "Wind") {
      background.style.backgroundImage = "url(img/wind_icon.png)"
      background.style.backgroundColor = '#9B9B9B'
    } else if (data.weather[0].main == "Fog") {
      background.style.backgroundImage = "url(img/fog_icon.png)"
      background.style.backgroundColor = '#BABABA'
    } else {
      background.style.backgroundColor = '#4A90E2'    }
  }
  getImage()
  
}

getWeather()
