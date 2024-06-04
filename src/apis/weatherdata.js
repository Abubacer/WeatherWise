import iconMapping from '../iconMapping';

const ApiKey = process.env.REACT_APP_WEATHER_API_KEY;
const BaseUrl = "https://api.openweathermap.org/data/2.5";

const fetchWeatherData = (infoType, searchParms) => {
    const url = new URL(BaseUrl + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParms, appid: ApiKey })

    return fetch(url).then((res) => res.json())
};

const formatCurrentWeather = (data) => {
    // console.log('Data from API:', data);
    const {
        coord: { lon, lat },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        timezone,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data

    // console.log('Data from const:', data);

    const { main: details, description, icon } = weather[0]

    const customIcon = iconMapping[icon] || '/src/weathericons/50d.svg';

    return { lon, lat, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, speed, details, description, timezone, icon: customIcon }
}

const formatForecastWeather = (data) => {
    const { list } = data;
    const formattedForecast = list.slice(0, 5).map((item) => {
        const { dt, main, weather, pop } = item;
        return {
            dt,
            temp: main.temp,
            icon: iconMapping[weather[0].icon] || '/src/weathericons/50d.svg',
            chanceOfPrecipitation: pop
        };
    });

    return formattedForecast;
};

const fetchFormattedWeatherData = async (searchParams) => {
    try {
        const currentWeather = await fetchWeatherData('weather', searchParams).then(formatCurrentWeather);
        const forecastData = await fetchWeatherData('forecast', searchParams).then(formatForecastWeather);

        return { currentWeather, forecastData };
    } catch (error) {
        console.error('Error fetching formatted weather data:', error.message);
        return null;
    }
};


export default fetchFormattedWeatherData;

