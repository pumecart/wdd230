// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const description = document.querySelector('#currently');
const weatherIcon = document.querySelector('#weather-icon');
const caption = document.querySelector('weatherfig');
const windSpeed = document.querySelector('#windspeed');
const windChill = document.querySelector('#windchill');


const apiURL = 
    'https://api.openweathermap.org/data/2.5/weather?q=East+Hartford&units=imperial&appid=243e94d8a8d615bddfd6d6bd53928f3e';
    

async function apiFetch() {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          console.log(`Response not OK ${await response.text()}`);
      }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
  }

  apiFetch();

  function capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
  }

  function displayResults(data) {
    let ctemp = `<strong>${data.main.temp.toFixed(0)}</strong>`;
    currentTemp.innerHTML = ctemp;
    let desc = `${capitalize(data.weather[0].description)}`;
    description.textContent = desc;
    let iconCap = `Icon of current weather condition at Wickham Park which is ${desc}`;
    caption.innerHTML = iconCap;
    weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.alt = iconCap;
    let windsp = `${data.wind.speed} MPH`;
    windSpeed.textContent = windsp;
  }
    
    // let calc= Math.round((35.74 + (0.6215 * currentTemp))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*currentTemp*Math.pow(windSpeed,0.16)));
    // let windchill = "";
    // if (currentTemp <= 50 && windSpeed > 3) {
    //     windchill = (t, s);
    //       calc = `${calc}&#176;F`;
    //     } else {
    //       calc = "N/A";
    //     }

    // windChill.textContent = calc;