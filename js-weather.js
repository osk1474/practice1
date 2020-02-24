const API_KEY = "e230993a1e94c8249292a00333970e10";
const COORDS = 'coords';
const weatherContainer = document.querySelector(".js-weather");

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json()
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weatherContainer.innerText = `${temperature}°C @ ${place}`
    })
}
//then -> 기다렸다 함 ㅋ
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}
//객체의 변수 이름과 객체의 key의 이름을 같게 설정하려면
// latitude,
// longitude

function handleGeoError(){
    console.log('error yo');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords)
        getWeather(parsedCoords.latitude,parsedCoords.longitude)
    }
}

function init(){
    loadCoords();
}

init();