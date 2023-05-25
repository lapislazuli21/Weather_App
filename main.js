const weatherApi = {
    key: "6b07db3e6babd88327d79b532e0887fe",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
    imgLink: "https://openweathermap.org/img/w/",
    imgSuffix: ".png",
}

document.getElementById("clickableAwesomeFont").onclick = function() {
    valOnLoad();
}


function valOnLoad() {
    var val1 = (document.getElementById('search').value).toLowerCase().trim();
    console.log(val1);
    if (val1 == null || val1 == '') {
        getWeather('mumbai')
    } else {
        getWeather(val1);
    }
}

function getWeather(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeather);
}

function showWeather(weather) {
    console.log(weather);

    let loc = document.getElementById('location');
    loc.innerText = `${weather.name}`;

    let temp = document.getElementById('temperature');
    temp.innerText = `${Math.round(weather.main.temp)}`

    let desc = document.getElementById('weather');
    desc.innerText = `${weather.weather[0].main}`;

    let icon = document.getElementById('icon');
    icon.src = `${weatherApi.imgLink}${weather.weather[0].icon}${weatherApi.imgSuffix}`

    switch (desc.innerText) {
        case "Clear":
            document.getElementById('overlay').style.backgroundImage = "url(http://openweathermap.org/img/wn/01n@2x.png)";
            break;
        case "Rain":
            document.getElementById('overlay').style.backgroundImage = "url(http://openweathermap.org/img/wn/10n@2x.png)";
            break;
        case "Snow":
            document.getElementById('overlay').style.backgroundImage = "url(http://openweathermap.org/img/wn/13n@2x.png)";
            break;  
        case "Drizzle":
            document.getElementById('overlay').style.backgroundImage = "url(http://openweathermap.org/img/wn/09n@2x.png)";
            break;  
        case "Clouds":
            document.getElementById('overlay').style.backgroundImage = "url(http://openweathermap.org/img/wn/04n@2x.png)";
            break;
        case "Thunderstorm":
            document.getElementById('overlay').style.backgroundImage = "url(http://openweathermap.org/img/wn/11n@2x.png)";
            break;
        default:
            document.getElementById('overlay').style.backgroundImage = "url(http://openweathermap.org/img/wn/50n@2x.png)";
            break;
    }

}

