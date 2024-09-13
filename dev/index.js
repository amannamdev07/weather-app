

const findCity = document.querySelector('#findCity');
const cityBtn = document.querySelector('#cityBtn');

const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

cityBtn.addEventListener('click', (event) => {
    const cityVal = findCity.value;
    findCity.value = ''

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=d5ca6ea73784224540b0b5f5d1145519&units=metric`

    const checkWeather = async () => {
        const response = await fetch(apiURL);
        const data = await response.json();
    
        city.innerText = data.name;
        temp.innerText = data.main.temp + " °C";
        wind.innerText = "Wind speed is : " + data.wind.speed + " km/h";
        humidity.innerText = "Humidity is : " + data.main.humidity
    }
    checkWeather()
})


