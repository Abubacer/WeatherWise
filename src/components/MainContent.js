import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../carousel-custom.css';
import getRecommendations from '../getRecommendations';
import { DateTime } from 'luxon';


function MainContent({ weather: { currentWeather, forecastData }, units }) {
    //console.log('Weather in MainContent:', weather);
    const { dt, timezone, name, country, details, feels_like, humidity, icon, speed, sunrise, sunset, temp, temp_max, temp_min } = currentWeather;
    //console.log("MainContentUnits:", units);
    function formatToLocalDatetime({ secs, offset, format }) {
        const offsetHours = offset / 3600;
        return DateTime.fromSeconds(secs).setZone(`UTC${offsetHours >= 0 ? '+' : ''}${offsetHours}`).toFormat(format);
    }

    const formattedDatetime = formatToLocalDatetime({ secs: dt, offset: timezone, format: "ccc, dd LLL yyyy' | 'hh:mm a" });
    const formattedSunrise = formatToLocalDatetime({ secs: sunrise, offset: timezone, format: 'hh:mm a' });
    const formattedSunset = formatToLocalDatetime({ secs: sunset, offset: timezone, format: 'hh:mm a' });

    const { clothingRecommendation, activityRecommendations } = getRecommendations(currentWeather, forecastData, units);

    let windSpeedLabel = '';
    if (units === 'metric') {
        windSpeedLabel = `m/s`;
    } else if (units === 'imperial') {
        windSpeedLabel = `mph`;
    }

    return (
        <div className="flex flex-col bg-transparent">
            <div className="flex flex-col xl:flex-row xl:space-x-4">
                <div className="w-full xl:w-8/12 backdrop-blur-sm bg-white/65 p-6 rounded-3xl">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col justify-start">
                            <h2 className="text-gray-600">{`${name}, ${country}`}</h2>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-gray-600">{formattedDatetime}</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center mt-10">
                        <p className="text-3xl text-gray-600">{`${details}`}</p>
                        <img src={icon} alt="" className="size-48 drop-shadow-sm" />
                        <p className="text-4xl text-gray-600">{Math.round(`${temp}`)}°</p>
                        <p className="text-gray-600">Feels like: {Math.round(`${feels_like}`)}°</p>
                        <p className="text-gray-600 mb-3">{`High: ${Math.round(temp_max)}° | Low: ${Math.round(temp_min)}°`}</p>
                    </div>

                    <hr className="my-2 border-blue-400 border-dashed" />
                    <div className="p-4 bg-transparent rounded-3xl text-center text-md">
                        <Carousel
                            showArrows={true}
                            showStatus={false}
                            showThumbs={false}
                            infiniteLoop={true}
                            autoPlay={true}
                            interval={5000}
                        >
                            <div>
                                <h3 className="font-semibold text-blue-500">What to Wear</h3>
                                <p className="text-gray-600 font-medium mt-1">{clothingRecommendation}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">Where to Play</h3>
                                <ul className="text-gray-600 font-medium mt-1">
                                    {activityRecommendations.map((activity, index) => (
                                        <li key={index} className="inline-block mx-3">{activity}</li>
                                    ))}
                                </ul>
                            </div>
                        </Carousel>
                    </div>
                </div>

                <div className="flex flex-col w-full text-lg text-white backdrop-blur-sm bg-blue-500/60 p-12 rounded-3xl mt-4 xl:mt-0">
                    <div className="space-y-1 divide-y divide-white divide-dashed">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <img src="./weathericons/raindrop.svg" alt="humidity icon" className="w-12" />
                                <p>Humidity</p>
                            </div>
                            <p>{`${humidity}%`}</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <img src="./weathericons/wind.svg" alt="Wind Speed" className="w-12" />
                                <p>Wind Speed</p>
                            </div>
                            <p>{`${Math.round(speed)} ${windSpeedLabel}`}</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <img src="./weathericons/chance-rain.svg" alt="Chance of Rain" className="w-12" />
                                <p>Chance of Rain</p>
                            </div>
                            <p>{`${Math.round(forecastData[0].chanceOfPrecipitation * 100)}%`}</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <img src="./weathericons/sunrise.svg" alt="Sunrise" className="w-12" />
                                <p>Sunrise</p>
                            </div>
                            <p>{formattedSunrise}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <img src="./weathericons/sunset.svg" alt="Sunset" className="w-12" />
                                <p>Sunset</p>
                            </div>
                            <p>{formattedSunset}</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <img src="./weathericons/uv-index.svg" alt="UV Index" className="w-12" />
                                <p>UV Index</p>
                            </div>
                            <p>5</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-start mt-8">
                        <p className="text-xl font-medium leading-6 text-white">
                            Hourly Forcast
                        </p>
                    </div>
                    <hr className="my-2" />

                    <div className="flex flex-row items-center justify-between mt-4">
                        {forecastData.map((forecast, index) => (
                            <div key={index} className="flex flex-col items-center justify-center">
                                <p className="text-sm">{formatToLocalDatetime({ secs: forecast.dt, offset: timezone, format: 'hh:mm a' })}</p>
                                <img src={forecast.icon} alt="" className="w-12 my-1" />
                                <p className="text-md">{`${Math.round(forecast.temp)}°`}</p>
                                <p className="text-sm">Rain: {`${Math.round(forecast.chanceOfPrecipitation * 100)}%`}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
