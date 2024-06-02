import { useState } from 'react';
import logo from '../img/icon.png'

const InfoBox = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="absolute flex flex-col z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 text-gray-800 p-4 shadow-md rounded-2xl">
            <div className="flex flex-row items-center justify-center p-4">
                <div className="flex flex-col items-center justify-center p-4">
                    <img src={logo} alt="logo" className="w-20 opacity-75 text-center" />
                    <h6 className="text-md font-medium mt-4">WeatherWise</h6>
                    <p className="text-xs text-center"><a href="https://github.com/Abubacer/weatherwise" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Github link</a></p>
                </div>

                <div className="text-gray-800 p-8 text-justify">
                    <button
                        className="absolute top-2 right-4 text-gray-400 hover:text-blue-600 rounded-full p-1"
                        onClick={handleClose}
                    >
                        X
                    </button>
                    <h6 className="text-md font-medium">About</h6>
                    <p className="text-sm">WeatherWise is a React-based weather application that allows users to view current weather conditions and forecasts for a specified location. Users can search for a location, use geolocation to fetch their current weather, and switch between Celsius and Fahrenheit temperature units. The application provides an intuitive user interface with smooth transitions and helpful recommendations based on the weather.</p>
                    <h6 className="text-md font-medium mt-4">Learning objectives</h6>
                    <ul className="text-sm">
                        <li>Dynamic Full-stack Applications Development</li>
                        <li>API Integration & Data Visualization</li>
                        <li>Frontend Development, UI/UX & Responsive Design</li>
                    </ul>
                    <hr className="border-1 border-gray-200 my-4" />
                    <p className="text-sm">Created With Passion & Love.<br />Powred by <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">OpenWeatherMap API</a> | <a href="https://locationiq.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LocationIQ API.</a></p>
                    <p className="text-xs mt-2">&copy; 2024 Aziz Belkharmoudi. All rights reserved.</p>
                </div>
            </div>
        </div >
    );
};

export default InfoBox;
