


const api ={
    base:"https://api.openweathermap.org/data/2.5/"
}
const API_KEY = "";
const COORDS = 'coords';

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
if (evt.keyCode == 13) {
  getResults(searchbox.value);
}
}

function getResults (query) {
fetch(`${api.base}weather?q=${query}&units=metric&APPID=${API_KEY}`)
  .then(weather => {
    return weather.json();
  }).then(function(json){
    console.log(json)
    const babo = json.weather[0].main;
    const temp = json.main.temp;
    const weathericon = json.weather[0].icon;
    const weatherIconedrs = `https://openweathermap.org/img/wn/${weathericon}@2x.png`;
    const pleca = json.name;
    const wand = json.wind.speed;
    const humadity = json.main.humidity;
    const weatherDascription = json.weather[0].description;
    a.innerText=`${temp}°C`
    weatherIconImg.setAttribute('src', weatherIconedrs);
    wa.innerText = `${pleca}`
    wea.innerText = `  
        
        wind:${wand}m/s
        weather:${weatherDascription}
        humidity:${humadity}%
        
        
           `;
           document.body.style.backgroundImage = `url(${json.weather[0]['main']}.jpg)`;
    if (temp > 100) {
        alert("eekta")

    } else if (temp > -273.14 && temp < -10) {
        tw.innerText = `very cold`
    } else if (temp > -10 && temp < 5) {
        tw.innerText = `cold`
    } else if (temp > 5 && temp < 15) {
        tw.innerText = `slightly cold`
    } else if (temp > 15 && temp < 24) {
        tw.innerText = `good temp`
    } else if (temp > 24 && temp < 32) {
        tw.innerText = `slightly hot`
    } else if (temp > 32 && temp < 35) {
        tw.innerText = `hot`
    } else if (temp > 35 && temp < 100) {
        tw.innerText = ` very hot`
    }

})
}



const wea = document.querySelector('.weatherInfo');
const weatherIconImg = document.querySelector('.weatherIcon');
const wa = document.querySelector('.location')
const a = document.querySelector('.temperature')
const tw = document.querySelector('.tempwarm')
function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=en`)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json)
        const temperature = json.main.temp;
        const place = json.name;
        const weatherDescription = json.weather[0].description;
        const weatherIcon = json.weather[0].icon;
        const weatherIconAdrs = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        const wind = json.wind.speed;
        const humidity = json.main.humidity;
        wea.innerText = `  
        
        wind:${wind}m/s
        weather:${weatherDescription}
        humidity:${humidity}%
        
        
           `;
        if (temperature > 100) {
            alert("eekta")

        } else if (temperature > -273.14 && temperature < -10) {
            tw.innerText = `very cold`
        } else if (temperature > -10 && temperature < 5) {
            tw.innerText = `cold`
        } else if (temperature > 5 && temperature < 15) {
            tw.innerText = `slightly cold`
        } else if (temperature > 15 && temperature < 24) {
            tw.innerText = `good temp`
        } else if (temperature > 24 && temperature < 32) {
            tw.innerText = `slightly hot`
        } else if (temperature > 32 && temperature < 35) {
            tw.innerText = `hot`
        } else if (temperature > 35 && temperature < 100) {
            tw.innerText = ` very hot`
        }
           document.body.style.backgroundImage = `url(${json.weather[0]['main']}.jpg)`;

        weatherIconImg.setAttribute('src', weatherIconAdrs);
        wa.innerText = `${place}`
        a.innerText = `${temperature}°C`

        calculate();
        setInterval(notify, 21600000);
        window.onload = function () {
            if (window.Notification) {
                Notification.requestPermission();
            }
        }

        function calculate() {
            setTimeout(function () {
                notify();
            }, 1);
        }

        function notify() {
            if (Notification.permission !== 'granted') {

            }
            else {
                var notification = new Notification(place + ' Current weather', {
                    icon: weatherIconAdrs,
                    body: temperature + "°C " + weatherDescription
                });


            }
        }
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
    //handleError가 났을떄 이 메시지를 띄움

}




init();
