import React from 'react';

function MainContent() {
    return (
        <div className="flex-1 bg-blue-50 p-4 flex flex-col">
            <div className="flex flex-grow flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4">
                <div className="flex-2 bg-white bg-opacity-90 p-6 rounded-3xl">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col justify-start">
                            <h2 className="text-gray-700">Berlin | DE</h2>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-gray-600">24 Dec 2024 18:26 PM</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center mt-16">
                        <p className="text-3xl text-gray-800">Cloudy</p>
                        <img src="./partly-cloudy-day1.svg" alt="" className="w-40" />
                        <p className="text-4xl text-gray-800">32°</p>
                        <p className="text-gray-600">Feels Like: 28°</p>
                        <p className="text-gray-600">H: 32° | L: 24°</p>
                    </div>

                    <hr className="my-6" />
                    <div className="mt-8 bg-blue-50 p-4 rounded-3xl h-42">
                        <h3 className="text-lg font-semibold text-blue-900">Tips and Recommendations</h3>
                        <p className="text-blue-800">It's warm, wear something light and comfy.</p>
                        <p className="text-blue-800">Don't forget to stay hydrated and wear sunscreen.</p>
                        <p className="text-blue-800">It's time for a beach or hiking adventure.</p>
                    </div>
                </div>

                <div className="flex-1 text-lg text-white bg-blue-500 bg-opacity-75 p-10 rounded-3xl">
                    <div className="space-y-1 divide-y divide-white divide-dashed">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <img src="./weathericons/raindrop.svg" alt="humidity icon" className="w-8" />
                                <p>Humidity</p>
                            </div>
                            <p>14%</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <img src="./weathericons/wind.svg" alt="Wind Speed" className="w-8" />
                                <p>Wind Speed</p>
                            </div>
                            <p>14km/h</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <img src="./weathericons/chance-rain.svg" alt="Chance of Rain" className="w-8" />
                                <p>Chance of Rain</p>
                            </div>
                            <p>16%</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <img src="./weathericons/sunrise.svg" alt="Sunrise" className="w-8" />
                                <p>Sunrise</p>
                            </div>
                            <p>06:00 AM</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <img src="./weathericons/sunset.svg" alt="Sunset" className="w-8" />
                                <p>Sunset</p>
                            </div>
                            <p>18:00 PM</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <img src="./weathericons/uv-index.svg" alt="UV Index" className="w-8" />
                                <p>UV Index</p>
                            </div>
                            <p>5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
