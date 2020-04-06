export const Weather = (weatherObject) => {
  return `
    <div class="weather box">
      <h3>Forecast</h3>
      <div>Date: ${new Date(weatherObject.dt * 1000).toLocaleDateString()}</div>
      <p>Description: ${weatherObject.weather[0].description}</p>
      <p>Temperature High: ${weatherObject.main.temp} F</p>
      <p>Feels Like: ${weatherObject.main.feels_like} F</p>
    </div>
  `
}
