import { DateTime } from "luxon";

const ApiKey = process.env.REACT_APP_WEATHER_API_KEY;
const BaseUrl = "https://api.openweathermap.org/data/2.5/";

const fetchWeatherData = (infoType, searchParms) => {
    const url = new URL(BaseUrl + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParms, appid: ApiKey })

    return fetch(url).then((res) => res.json())
};

const formatCurrentWeather = (data) => {
    const {
        coord: { lat, long },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data

    const { main: details, icon } = weather[0]

    return { lat, long, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, speed, details, icon }
}

const formatforcastedWeather = (data) => {
    let { timezone, hourly, daily } = data
    hourly = hourly.slice(1, 6).map((h) => {
        return {
            temp: h.temp,
            icon: h.weather[0].icon
        }
    })

    daily = daily.slice(1, 6).map((d) => {
        return {
            title: formatToLocalDatetime(d.dt, timezone, "ccc"),
            temp: d.temp.day,
            icon: d.weather[0].icon
        };
    });

    return { timezone, hourly, daily };
}

const fetchFormatedWeatherData = async (searchParms) => {
    const currentWeather = await fetchWeatherData('weather', searchParms).then(formatCurrentWeather)
    const { lat, lon } = currentWeather
    const forcastedWeather = await fetchWeatherData('onecall', {
        lon, lat, exclude: 'current.minutely.alerts', units: searchParms.units
    }).then(formatforcastedWeather)

    return { ...currentWeather, ...forcastedWeather };
};

const formatToLocalDatetime = ({ secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a" }) => {
    return DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
};

export default fetchFormatedWeatherData;
