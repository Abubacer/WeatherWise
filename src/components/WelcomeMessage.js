import React from 'react';
import { UilMapMarkerQuestion } from '@iconscout/react-unicons'

const WelcomeMessage = () => {
    return (
        <div className="bg-transparent p-20 flex flex-col items-center mt-20">
            <UilMapMarkerQuestion size={60} className="text-white mb-6" />
            <h1 className="text-4xl text-white text-center">Welcome to WeatherWise</h1>
            <p className="text-2xl text-white text-center mt-2">To start, enter your location in the search bar or simply click the geolocation button</p>
            <p className="text-md text-white text-center mt-40">Crafted with passion and love by Aziz Belkharmoudi, 2024.</p>
        </div >
    );
};

export default WelcomeMessage;
