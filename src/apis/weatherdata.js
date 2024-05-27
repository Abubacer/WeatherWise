const ApiKey = process.env.REACT_APP_WEATHER_API_KEY;
const BaseUrl = "https://api.openweathermap.org/data/2.5/";

const fetchWeatherData = (infoType, searchParms) => {
    const url = new URL(BaseUrl + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParms, appid: ApiKey })

    return fetch(url).then((res) => res.json()).then((data) => data);
};

export default fetchWeatherData;
