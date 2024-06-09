import { useState } from 'react';
import logo from '../img/icon.png'
import { UilMultiply } from '@iconscout/react-unicons'

const InfoBox = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="absolute hidden top-44 left-80 right-80 xl:block z-50 bg-background text-textPrimary p-4 shadow-md rounded-2xl w-400 h-600" data-aos="fade">
            <div className="flex flex-row items-center justify-center p-4">
                <div className="flex flex-col items-center justify-center p-12">
                    <img src={logo} alt="logo" className="w-26 text-center" />
                    <h6 className="text-md font-medium mt-4">WeatherWise</h6>
                    <p className="text-xs text-center"><a href="https://github.com/Abubacer/weatherwise" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Github link</a></p>
                </div>

                <div className="text-gray-800 p-8 text-left">
                    <button
                        className="absolute top-4 right-4 rounded-full p-1"
                        onClick={handleClose}
                    >
                        <UilMultiply size={24} className="text-gray-400 cursor-pointer hover:text-primary" />
                    </button>
                    <p className="text-sm">WeatherWise is a React-based weather application that allows users to view current weather conditions and forecasts for a specified location. Users can search for a location, use geolocation to fetch their current weather, and switch between Celsius and Fahrenheit temperature units. The application provides an intuitive user interface with smooth transitions and helpful recommendations based on the weather.</p>
                    <p className="text-sm mt-2">Big shoutout to Holberton School and ALX Africa! Their coding education empowered me to build amazing things.</p>
                    <hr className="border-1 border-gray-200 my-2 mt-6" />
                    <p className="text-xs">Created With Passion and Love.<br />Powred by <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">OpenWeatherMap API</a> | <a href="https://locationiq.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LocationIQ API.</a></p>
                    <hr className="border-1 border-gray-200 my-2" />
                    <p className="text-xs">&copy; 2024 Aziz Belkharmoudi. All rights reserved.</p>
                </div>
            </div>
        </div >
    );
};

export default InfoBox;
