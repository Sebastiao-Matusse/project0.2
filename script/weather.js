const currentTemp = document.querySelector(".current-temperature");
const dayTwoTemp = document.querySelector(".temperature-two");
const dayThreeTemp = document.querySelector(".temperature-three");
const dayFourTemp = document.querySelector(".temperature-four");

const weatherIcon = document.querySelector("#weather-icon");
const dayTwoWeatherIcon = document.querySelector("#day-two-weather-icon");
const dayThreeWeatherIcon = document.querySelector("#day-three-weather-icon");
const dayFourWeatherIcon = document.querySelector("#day-four-weather-icon");

const captionDesc = document.querySelector(".figcaption-one");
const captionDescTwo = document.querySelector(".figcaption-two");
const captionDescThree = document.querySelector(".figcaption-three");
const captionDescFour = document.querySelector(".figcaption-four");

const humidity = document.querySelector("#humidity");
const humidityTwo = document.querySelector(".humidity-two");
const humidityThree = document.querySelector(".humidity-three");
const humidityFour = document.querySelector(".humidity-four");

const windChill = document.querySelector(".windChill");
const windChillTwo = document.querySelector(".windChill-two");
const windChillThree = document.querySelector(".windChill-three");
const windChillFour = document.querySelector(".windChill-four");

const weatherurl =
  "https://api.openweathermap.org/data/2.5/forecast?id=1052373&units=imperial&lang=pt&appid=6b2ac5c31cc8f9324e82017d0a20bc18";

async function apiFetch() {
  try {
    const response = await fetch(weatherurl);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      displayResults(data, 0, 5);
      // displayResults(data, 1);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(weatherData, index_one, index_two) {
  // DAY ONE
  currentTemp.innerHTML = `<strong>${weatherData.list[
    index_one
  ].main.temp.toFixed(0)}</strong>`;
  humidity.innerHTML = `<strong>${weatherData.list[
    index_one
  ].main.humidity.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[index_one].weather[0].icon}.png`;
  const desc = weatherData.list[index_one].weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc.toUpperCase();

  // DAY TWO

  dayTwoTemp.innerHTML = `<strong>${weatherData.list[
    index_two
  ].main.temp.toFixed(0)}</strong>`;
  humidityTwo.innerHTML = `<strong>${weatherData.list[
    index_two
  ].main.humidity.toFixed(0)}</strong>`;

  const iconsrcTwo = `https://openweathermap.org/img/w/${weatherData.list[index_two].weather[0].icon}.png`;
  const descTwo = weatherData.list[index_two].weather[0].description;

  dayTwoWeatherIcon.setAttribute("src", iconsrcTwo);
  dayTwoWeatherIcon.setAttribute("alt", descTwo);
  captionDescTwo.textContent = descTwo.toUpperCase();
}
