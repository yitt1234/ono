
const API_KEY = "7ce9242fc61fc806b906c5b9538298fe"; 
const COORDS = 'coords';

const weatherIconImg = document.querySelector('.weatherIcon');
const wea = document.querySelector('.weatherInfo');



function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=en`)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json)
        const temperature = json.main.temp;
        
        const weatherIcon = json.weather[0].icon;
        const weatherIconAdrs = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
       
        wea.innerText = `  
        
        ${temperature}°C

        
           `;
        weatherIconImg.setAttribute('src', weatherIconAdrs);
        document.body.style.backgroundImage = `url(${json.weather[0]['main']}.jpg)`;
    })
    .catch((handleError) => console.log("error:", handleError));
}
function init() {
    askForCoords()
}


function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    
}


function handleSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    getWeather(latitude, longitude);
    
    
    console.log("location access success")
    
    
}

function handleError() {
    console.log(error)
}



init();