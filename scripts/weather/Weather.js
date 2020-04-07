export const Weather = (weatherObject) => {
  return `
    <div class="weather box">
      <h3>Forecast ${new Date(weatherObject.dt * 1000).toLocaleDateString('en-US')}</h3>
      <p>Description: ${weatherObject.weather[0].description}</p>
      <p>Temperature Low: ${weatherObject.main.temp_min} F</p>
      <p>Temperature High: ${weatherObject.main.temp_max} F</p>
      <p>Feels Like: ${weatherObject.main.feels_like} F</p>
    </div>
  `
}
