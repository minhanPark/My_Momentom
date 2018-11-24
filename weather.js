const API_KEY = "c696782801cb527b4c4d1b6d11f0b731";
const GEO = "geo";
const wText = document.querySelector(".weather-text"),
  wIcon = document.querySelector(".weather-icon");

const handleWeatherText = text => {
  wText.innerHTML = text;
};

const getGeoInfo = () => {
  const geo = localStorage.getItem(GEO);
  return geo;
};

const saveGeoLS = (key, value) => {
  localStorage.setItem(key, value);
};

const getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(response => response.json())
    .then(json => {
      const text = `${json.name} is ${json.main.temp}°C and ${
        json.weather[0].main
      }`;
      handleWeatherText(text);
    });
};

const geolocationSuccess = position => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const geoObj = { latitude, longitude };
  saveGeoLS(GEO, JSON.stringify(geoObj));
  getWeather(geoObj.latitude, geoObj.longitude);
};

const geolocationError = () => {
  handleWeatherText("위치를 찾을 수 없습니다.");
};

const currentGeoData = () => {
  navigator.geolocation.getCurrentPosition(
    geolocationSuccess,
    geolocationError
  );
};

const loadLoc = () => {
  const geo = getGeoInfo();
  if (geo === null) {
    currentGeoData();
  } else {
    const { latitude, longitude } = JSON.parse(geo);
    getWeather(latitude, longitude);
  }
};

const weatherInit = () => {
  loadLoc();
};

wIcon.addEventListener("click", currentGeoData);

weatherInit();

//json.main.temp
//json.weather.main
//json.name
