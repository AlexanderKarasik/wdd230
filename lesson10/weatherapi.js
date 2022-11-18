// select HTML elements in the document
let temp = document.createElement('p');const weatherIcon = document.querySelector('#weather-icon');
let title = document.createElement('h1');
let heading2 = document.createElement('h2');
let figure = document.createElement('figure');
let image = document.createElement('img');
let captionDesc = document.createElement('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=6eb57b92da1a81ed613b13a33028117d';


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
  temp.innerHTML = `The current temperature in Fairbanks, Alaska is <strong>${weatherData.main.temp.toFixed(0)}</strong> &deg;F`
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
//   CAPITALIZE FIRST LETTERS OF EACH WORD
const words = desc.split(" ");
let result = words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" ");

  image.setAttribute('src', iconsrc);
  image.setAttribute('alt', words);
  captionDesc.textContent = result;
  }

//   CREATE ELEMENTS
  title.innerHTML = 'OpenWeatherMap.org API Test<hr>';
  heading2.innerHTML = 'Current Condition Icon';
  figure.appendChild(image);
  figure.appendChild(captionDesc);
  document.querySelector('body').appendChild(title);
  document.querySelector('body').appendChild(temp);
  document.querySelector('body').appendChild(heading2);
  document.querySelector('body').appendChild(figure);


  