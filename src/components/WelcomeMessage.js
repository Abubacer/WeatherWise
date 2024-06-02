import React from 'react';

const WelcomeMessage = () => {
    return (
        <div className="flex flex-col items-center p-10 max-w-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-60 h-60 p-2">
                <g>
                    <path fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21" />
                    <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate" />
                </g>
            </svg>
            <h1 className="text-4xl text-gray-50 text-center ">Welcome to WeatherWise</h1>
            <hr className="border-1 border-gray-50 w-40 my-4" />
            <p className="text-2xl text-gray-50 text-center">To start, enter your location in the search bar or simply click the geolocation button</p>
            <a href="https://github.com/Abubacer/weatherwise" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-50  hover:text-gray-500 text-center mt-20 xl:mt-32 p-4 drop-shadow-sm">Crafted with passion and love by Aziz Belkharmoudi, 2024.</a>
        </div >
    );
};

export default WelcomeMessage;
