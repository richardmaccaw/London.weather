const heroDiv = document.querySelector(".hero")
const weatherDiv = document.createElement('h1')
heroDiv.appendChild(weatherDiv)


const getWeather = async () => {
  // get weather api response
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&lat=51&lon=-0.13&&APPID=0929cfdb09431c5749641254e1e34af9`)
  let data = await response.json()
  
  // show the response
  let weatherContent = document.createTextNode(data.weather[0].main)
  weatherDiv.appendChild(weatherContent)

  // show the image
  const getImage = function () {
    let backgroundImage = document.querySelector('.myContainer')
    if (data.weather[0].main == "Rain") {
      backgroundImage.style.backgroundImage = "url(img/rain.png)"
    } else if (data.weather[0].main == "Sun") {
      backgroundImage.style.backgroundImage = "url(img/sun.png)"
    } else if (data.weather[0].main == "Clouds") {
      backgroundImage.style.backgroundImage = "url(img/clouds.png)"
    } else {
      backgroundImage.style.backgroundImage = "url(img/sun.png)"
    }
  }
  getImage()
  
}

getWeather()




