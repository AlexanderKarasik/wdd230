let temperature = document.querySelector('#weatherTemp');
let image = document.querySelector('.temp img');
let speed = document.querySelector('#windspeed');
let windchill = document.querySelector('.windchill');
let description = document.querySelector('#cloudy');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=6eb57b92da1a81ed613b13a33028117d';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
         displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();


  function displayResults(weatherData) {
// TEMPERATURE
  temperature.innerHTML = `${((weatherData.main.temp-32)*5/9).toFixed(0)} &degC`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
//   DESCRIPTION AND IMAGE
    const desc = weatherData.weather[0].description;
//   CAPITALIZE FIRST LETTERS OF EACH WORD
const words = desc.split(" ");
let result = words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" ");

  image.setAttribute('src', iconsrc);
  image.setAttribute('alt', result);
description.innerHTML = result;

// WIND SPEED
speed.innerHTML = `${weatherData.main.humidity} %`;
  }


  const url1 = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad, US&units=metric&appid=6eb57b92da1a81ed613b13a33028117d';

  async function apiFetch_one() {
    try {
      const response = await fetch(url1);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
         displayResults1(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  apiFetch_one();

  function displayResults1(weatherData) {
    // TEMPERATURE
      // temperature.innerHTML = `${((weatherData.main.temp-32)*5/9).toFixed(0)} &degC`;
        // const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
      // image.setAttribute('src', iconsrc);
      // image.setAttribute('alt', result);
    // description.innerHTML = result;
    document.querySelector('.dayone').innerHTML = `${((weatherData.list[8].main.temp)).toFixed(0)} &degC / ${((weatherData.list[4].main.temp)).toFixed(0)} &degC`;
    document.querySelector('.daytwo').innerHTML = `${((weatherData.list[16].main.temp)).toFixed(0)} &degC / ${((weatherData.list[12].main.temp)).toFixed(0)} &degC`;
    document.querySelector('.daythree').innerHTML = `${((weatherData.list[24].main.temp)).toFixed(0)} &degC / ${((weatherData.list[20].main.temp)).toFixed(0)} &degC`;
    document.querySelector('.dayonedate').innerHTML = `${((weatherData.list[8].dt_txt)).slice(0,10)}: &nbsp&nbsp  `;
    document.querySelector('.daytwodate').innerHTML = `${((weatherData.list[16].dt_txt)).slice(0,10)}: &nbsp&nbsp  `;
    document.querySelector('.daythreedate').innerHTML = `${((weatherData.list[24].dt_txt)).slice(0,10)}: &nbsp&nbsp  `;


    // WIND SPEED
    // speed.innerHTML = `${weatherData.main.humidity} %`;
      }