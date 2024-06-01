import React from 'react';
import { UilMapMarkerQuestion } from '@iconscout/react-unicons'

const WelcomeMessage = () => {
    return (
        <div className="flex flex-col items-center p-20 max-w-2xl">
            <UilMapMarkerQuestion size={60} className="text-white drop-shadow-sm mb-6" />
            <h1 className="text-4xl text-gray-50 text-center ">Welcome to WeatherWise</h1>
            <hr className="border-1 border-gray-50 w-40 my-4" />
            <p className="text-2xl text-gray-50 text-center">To start, enter your location in the search bar or simply click the geolocation button</p>
            <p className="text-sm text-gray-100 text-center pt-20 drop-shadow-sm">Crafted with passion and love by Aziz Belkharmoudi, 2024.</p>
        </div >
    );
};

export default WelcomeMessage;
