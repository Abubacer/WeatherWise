import React from 'react';
import { UilMapMarkerQuestion } from '@iconscout/react-unicons'

const WelcomeMessage = () => {
    return (
        <div className="bg-transparent p-10 flex flex-col items-center mt-20">
            <UilMapMarkerQuestion size={60} className="text-white drop-shadow-sm mb-6" />
            <h1 className="text-4xl text-white text-center drop-shadow-sm ">Welcome to WeatherWise</h1>
            <hr className="border-1 border-white w-40 my-4" />
            <p className="text-2xl text-white text-center drop-shadow-sm">To start, enter your location in the search bar or simply click the geolocation button</p>
            <p className="text-md text-white text-center mt-20 drop-shadow-sm">Crafted with passion and love by Aziz Belkharmoudi, 2024.</p>
        </div >
    );
};

export default WelcomeMessage;
